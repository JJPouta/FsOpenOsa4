const logger = require('./logger')

const requestLogger = (req, res, next) => {
  logger.infoMsg('Method', req.method)
  logger.infoMsg('Path', req.path)
  logger.infoMsg('Body', req.body)
  next()
}

const errorHandler = (error, req, res, next) => {
  logger.errorMsg(error.message)
  next(error)
}

module.exports = {
  requestLogger,
  errorHandler
}
