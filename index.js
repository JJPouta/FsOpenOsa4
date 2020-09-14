require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const connString = process.env.MONGO_URL

mongoose.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Blogi database'))
  .catch((error) => console.log('Error connecting to Blogi database:', error.message))

app.use(cors())
app.use(express.json())

app.get('/api/blog', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blog', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
