const express = require('express')
const router = express.Router()
const Location = require('../models/location.model')

// GET -> /locations/
router.get('/', (req, res, next) => {
  const locations = Location.find()
  res.status(200).json({
    locations
  })
})
router.get('/:id', (req, res, next) => {
  const locations = Location.find({id: req.params.id})
    res.status(200).json({
      locations
    })
})

// POST -> /locations/
router.post('/', (req, res, next) => {
  const {lat, lon, userId} = req.body
  const location = new Location(lat, lon, userId)
  Location.save()
  res.status(201).json({
    msg: 'you have created a new location'
  })
})
// PUT -> /locations/:id
router.put('/:id', (req, res, next) => {
  const {lan, lon} = req.body
  const updateOptions = {}
  if (lan) {
    updateOptions.lan = lan
  }
  if (lon) {
    updateOptions.lon = lon
  }
  Location.update({id: req.params.id}, updateOptions)
  res.status(200).json({
    msg: 'you have just updated a location'
  })
})
// DELETE -> /locations/:id
router.delete('/:id', (req, res, next) => {
  Location.remove({id: req.params.id})
  res.status(200).json({
    msg: 'you have deleted a particular location'
  })
}) 


module.exports = router
