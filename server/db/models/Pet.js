const mongoose = require('mongoose')


const petSchema = new mongoose.Schema({
  image: { type: String, default: ''},
  name: { type: String, require: true },
  spacies: { type: String },
  sex: { type: String },
  breed: { type: String },
  birthdate: { type: Date },
  weight: { type: Number },
  owner: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet
