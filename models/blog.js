const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const connString = process.env.MONGO_URL

console.log(connString)
mongoose.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Blogi database'))
  .catch((error) => console.log('Error connecting to Blogi database:', error.message))

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
