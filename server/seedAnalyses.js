const mongoose = require('mongoose')
const AnalysesBioCat = require('./db/models/analysesBioCat.models.js')
const connect = require('./db/connect.js')

const analysesBloodCat = {
  LDH: 260,
  ALT: 46,
  AST: 36,
  ALB: 36,
  T_Pro: 4,
  T_Bil: 3,
  GLU:2,
  T_Cho: 1,
  ALP: 64,
}

async function seed() {
  await connect()
  await AnalysesBioCat.insertMany(analysesBloodCat)
  await mongoose.connection.close()
  console.log('База засеяна')
}
seed()
