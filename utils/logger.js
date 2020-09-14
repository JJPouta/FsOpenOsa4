const infoMsg = (...params) => {
  console.log(...params)
}

const errorMsg = (...params) => {
  console.error(...params)
}

module.exports = {
  infoMsg, errorMsg

}
