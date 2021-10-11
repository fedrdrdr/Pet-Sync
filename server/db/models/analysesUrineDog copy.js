const { Schema, model } = require('mongoose')

const analysesUrineDog = new Schema({
  owner: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
  date: { type: Date, default: Date.now() },
  normalAN16110: { type: [Number], default: [0, 0.5] },
  normalAN116: { type: [Number], default: [1.01, 1.04] },
  normalAN28110: { type: [Number], default: [0, 0.5] },
  normalAN15110: { type: [Number], default: [0.21, 0.57] },
  normalAN114: { type: [Number], default: [0, 20] },
  AN16110: { type: Number },
  AN116: { type: Number },
  AN28110: { type: Number },
  AN15110: { type: Number },
  AN114: { type: Number },
})

module.exports = model('AnalysesUrineDog', analysesUrineDog)
