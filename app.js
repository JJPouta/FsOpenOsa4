const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./controllers/blogRouter')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const connString = process.env.MONGO_URL

mongoose.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.infoMsg('Connected to Blogi database'))
  .catch((error) => logger.errorMsg('Error connecting to Blogi database:', error.message))

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/notes', router)

// app.use(middleware.unknownEndpoint)
// app.use(middleware.errorHandler)

module.exports = app
