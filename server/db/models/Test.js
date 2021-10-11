const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet' },
  title: { type: String, require: true },
  testdate: { type: Date, require: true },
  data: { type: String, require: true },
})

const Test = mongoose.model('Test', testSchema)

module.exports = Test
