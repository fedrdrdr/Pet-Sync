const router = require('express').Router()
const AnalysesBioCat = require('../db/models/analysesBioCat.models.js')

router.get('/list', async (req, res) => {
  const analyses = await AnalysesBioCat.find().sort({ date: -1 })
  res.json(analyses)
})

router.get('/', async (req, res) => {
  const analyses = await AnalysesBioCat.find().sort({ date: -1 })
  const resultAnalyses = analyses[0]._doc
  let chartValue = 0
  const normal = {
    LDH: [320, 460],
    ALT: [8, 52],
    AST: [9, 39],
    ALB: [22, 32],
    T_P: [43, 75],
    T_B: [2, 5],
    GLU: [3, 8],
    T_Cho: [2, 4],
    ALP: [12, 65],
  }
  let count = 0
  for (let key in normal) {
    if (
      normal[key][0] <= resultAnalyses[key] &&
      normal[key][1] >= resultAnalyses[key]
    ) {
      chartValue += 11.1
    }
  }
  const finalAnalyse = { ...resultAnalyses }
  finalAnalyse['chart'] = chartValue
  res.json(finalAnalyse)
})

module.exports = router
