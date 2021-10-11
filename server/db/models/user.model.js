const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  // name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String }, // link to activated
  pets: { type: Schema.Types.ObjectId, ref: 'Pet' },
})

module.exports = model('User', userSchema)
