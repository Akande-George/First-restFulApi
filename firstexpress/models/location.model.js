const uuid = require('uuid')
const db = require('../db')
const Location = function (lat, lon, userId) {
  this.lat = lat
  this.lon = lon
  this. userId = userId
  this.id = uuid.v4()
}

Location.find = function (query) {
  if (!query) {
    const locations = db.get('locations').value()
    return locations ? locations: []
  } else {
    const locations = db.get('locations').find(query).value()
    return locations ? locations: []
  }
}
Location.update = function (query, updates) {
  db.get('locations')
    .find(query)
    .assign(updates)
    .write()
}
Location.remove = function (query) {
  db.get('locations')
    .remove(query)
    .write()
}
Location.prototype.save = function (query) {
  db.get('locations')
    .push(this)
    .write()
}

module.exports = Location
