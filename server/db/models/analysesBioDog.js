const { Schema, model } = require('mongoose')

const analysesBioDog = new Schema({
  owner: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
  date: { type: Date, default: Date.now() },
  normalLDH: { type: [Number], default: [220, 450] },
  normalALT: { type: [Number], default: [8, 57] },
  normalAST: { type: [Number], default: [9, 49] },
  normalALB: { type: [Number], default: [22, 39] },
  normalT_P: { type: [Number], default: [50, 100] },
  normalT_B: { type: [Number], default: [1, 10] },
  normalGLU: { type: [Number], default: [3, 6] },
  normalT_Cho: { type: [Number], default: [3, 7] },
  normalALP: { type: [Number], default: [10, 100] },
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

module.exports = model('AnalysesBioDog', analysesBioDog)
