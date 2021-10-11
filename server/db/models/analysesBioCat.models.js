const { Schema, model } = require('mongoose')

const analysesBioCat = new Schema({
  owner: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
  date: { type: Date, default: Date.now() },
  normalLDH: { type: [Number], default: [320, 460] },
  normalALT: { type: [Number], default: [8, 52] },
  normalAST: { type: [Number], default: [9, 39] },
  normalALB: { type: [Number], default: [22, 32] },
  normalT_P: { type: [Number], default: [43, 75] },
  normalT_B: { type: [Number], default: [2, 5] },
  normalGLU: { type: [Number], default: [3, 8] },
  normalT_Cho: { type: [Number], default: [2, 4] },
  normalALP: { type: [Number], default: [12, 65] },
  LDH: { type: Number },
  ALT: { type: Number },
  AST: { type: Number },
  ALB: { type: Number },
  T_Pro: { type: Number },
  T_Bil: { type: Number },
  GLU: { type: Number },
  T_Cho: { type: Number },
  ALP: { type: Number },
})

module.exports = model('AnalysesBioCat', analysesBioCat)
