const express = require('express')
const router = express.Router()
const User = require('../models/user.model')

// DB collection Mock


// GET /user -> Gets all the users
router.get('/', (req, res) => {
  const users = User.find()
  res.status(200).json({
   users
  })
})
// GET /user/:id -> Get a particular user
router.get('/:id', (req, res) => {
  const users = User.find({id: req.params.id})
  res.status(200).json({
    users
  })
})
// POST /user -> creates a new user
router.post('/', (req, res) => {
  const {name, age} = req.body
  const user = new User(name, age)
  user.save()
  res.status(201).json({
    message: `you have created a new user`
  })
})
// PUT /user/:id -> updates a particular user
router.put('/:id', (req, res) => {
  const {name, age} = req.body
  const updateOptions = {}
  if (name) {
    updateOptions.name = name
  }
  if (age) {
    updateOptions.age = age
  }
  // transactions
  User.updates({id: req.params.id}, updateOptions)
  res.status(200).json({
    message: `the new changes you made is ${req.params.id}`
  })
})
// DELEE /user/:id -> deletes a particular user by id
router.delete('/:id', (req, res) => {
  User.remove({id: req.params.id})
  res.status(200).json({
    message: `you deleted ${users[0].name}`
  })
})

module.exports = router
