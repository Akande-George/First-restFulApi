const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('data.json')
const db = lowdb(adapter)

db.defaults({users: [], locations: []}).write()

module.exports = db