const { Schema, model } = require('mongoose')

const analysesUrineCat = new Schema({
  owner: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
  date: { type: Date, default: Date.now() },
  normalAN16110: { type: [Number], default: [0, 0.16] },
  normalAN116: { type: [Number], default: [1.02, 1.05] },
  normalAN28110: { type: [Number], default: [0, 0.4] },
  normalAN15110: { type: [Number], default: [0.03, 0.57] },
  normalAN114: { type: [Number], default: [5, 20] },
  AN16110: { type: Number },
  AN116: { type: Number },
  AN28110: { type: Number },
  AN15110: { type: Number },
  AN114: { type: Number },
})

module.exports = model('AnalysesUrineCat', analysesUrineCat)
