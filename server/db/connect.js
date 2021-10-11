const mongoose = require('mongoose')
const { dbUrl, options } = require('./config')

function connect() {
  mongoose.connect(dbUrl, options)
  console.log('Connected to BD')
}

module.exports = connect
