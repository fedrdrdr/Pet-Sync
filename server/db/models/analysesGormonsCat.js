const { Schema, model } = require('mongoose')

const analysesGormonsCat = new Schema({
  owner: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
  date: { type: Date, default: Date.now() },
  normalACT: { type: [Number], default: [10, 60] },
  normalALD: { type: [Number], default: [7, 105] },
  normalINS: { type: [Number], default: [5, 20] },
  normalPTH: { type: [Number], default: [1, 38] },
  normalT4: { type: [Number], default: [12, 55] },
  normalCOR: { type: [Number], default: [28, 140] },
  normalGAS: { type: [Number], default: [0, 18] },
  ACT: { type: Number },
  ALD: { type: Number },
  INS: { type: Number },
  PTH: { type: Number },
  T4: { type: Number },
  COR: { type: Number },
  GAS: { type: Number },
})

module.exports = model('AnalysesGormonsCat', analysesGormonsCat)
