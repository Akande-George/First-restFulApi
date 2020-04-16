const logger = (req, res, next) => {
  const {url, method} = req
  const time = new Date()
  const message = `${method}: ${url} - ${time}`
  console.log(message)
  next()
}

module.exports = logger