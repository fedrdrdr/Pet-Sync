const { Schema, model } = require('mongoose')

const analysesGormonsDog = new Schema({
  owner: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
  date: { type: Date, default: Date.now() },
  normalACT: { type: [Number], default: [10, 80] },
  normalALD: { type: [Number], default: [2, 96] },
  normalINS: { type: [Number], default: [5, 20] },
  normalPTH: { type: [Number], default: [19, 123] },
  normalT4: { type: [Number], default: [15, 67] },
  normalCOR: { type: [Number], default: [28, 170] },
  normalGAS: { type: [Number], default: [0, 100] },
  ACT: { type: Number },
  ALD: { type: Number },
  INS: { type: Number },
  PTH: { type: Number },
  T4: { type: Number },
  COR: { type: Number },
  GAS: { type: Number },
})

module.exports = model("AnalysesGormonsDog", analysesGormonsDog);
