const express = require('express')
const app = express()
const port = 8000

//routers
const userRouter = require('./routers/user.router')
const locationRouter = require('./routers/location.router')

// middleware imports
const logger = require('./middleware/logger')
const notfound = require('./middleware/notfound')
const errorHandler = require('./middleware/errorHandler')
const bodyParser = require('body-parser')

//middleware wire up
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', logger)

app.use('/users', userRouter)
app.use('/locations', locationRouter)

app.use(notfound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`listening at port ${port}`)
})