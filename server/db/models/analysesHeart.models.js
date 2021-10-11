const { Schema, model } = require('mongoose')

const analysesHeartSchema = new Schema({
  // idPet: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
  normalLDH: { type: [Number], default: [320, 460] },
  normalGPT: { type: [Number], default: [8, 52] },
  normalGOT: { type: [Number], default: [9, 39] },
  normalALB: { type: [Number], default: [22, 32] },
  normalT_Pro: { type: [Number], default: [43, 75] },
  normalT_Bil: { type: [Number], default: [2, 5] },
  LDH: { type: Number },
  GPT: { type: Number },
  GOT: { type: Number },
  ALB: { type: Number },
  T_Pro: { type: Number },
  T_Bil: { type: Number },
  date: { type: Date, default: Date.now() },
})

module.exports = model('AnalysesHearth', analysesHeartSchema)
