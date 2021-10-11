const AnalysesBioCat = require('../db/models/analysesBioCat.models')
const AnalysesBioDog = require("../db/models/analysesBioDog");
const AnalysesGormonsDog = require('../db/models/analysesGormonsDog')
const AnalysesGormonsCat = require("../db/models/analysesGormonsCat");
const Feed = require('../db/models/feed.model')
const Pet = require('../db/models/Pet');
const AnalysesUrineCat = require('../db/models/analysesUrineCat');
const AnalysesUrineDog = require('../db/models/analysesUrineDog copy');
const router = require('express').Router()

router.get('/', (req, res) => {
  res.status(200).send('hello')
})

router.post('/addPet', async (req, res) => {
  const { name, spacies, sex, breed, birthdate, weight, owner, image } = req.body
  const newPet = new Pet({
    image,
    name,
    spacies,
    sex,
    breed,
    birthdate,
    weight,
    owner,
  })
  newPet.save()
  res.json({ message: 'Питомец успешно добавлен!' })
})

router.post('/findpet', async (req, res) => {
  const { id } = req.body
  const findPets = await Pet.find({ owner: id })
  res.json({ petsArr: findPets })
})

router.get("/feed", async (req, res) => {
  const findFeed = await Feed.find();
  res.json({ feedArr: findFeed });
});

router.post('/addfeed', (req, res) => {
  const { img, type, age, size, veterinaryDiet, brand, name } = req.body
  const newFeed = new Feed({
    img,
    type,
    age,
    size,
    veterinaryDiet,
    brand,
    name,
  });
  newFeed.save();
  res.json({ message: "Корм успешно добавлен в базу данных!" });
})


router.delete('/delete/:petid', async (req, res) => {
  const delPet = await Pet.findByIdAndDelete({_id: req.params.petid})
  if(delPet){
    res.json({status: true})
  } else {
    res.json({status: false})
  }
})

router.delete('/delfeed/:id', async (req, res) => {
  const delFeed = await Feed.findByIdAndDelete({ _id: req.params.id })
  if (delFeed) {
    res.json({status: true})
  } else {
    res.json({status: false})
  }
})

router.put('/put/:petid', async (req, res) => {
  const {name,spacies,breed,sex, weight, birthdate} = req.body
  await Pet.findOneAndUpdate({_id: req.params.petid}, {name,spacies,breed,sex, weight, birthdate})
  res.json({ status: true })
})
router.put('/put/photo/:petid', async (req, res) => {
  const {name} = req.body  
  await Pet.findOneAndUpdate({_id: req.params.petid}, {image: name})
  res.json({ status: true, name })
})

router.put('/edit/:id', async (req, res) => {
  const {img, type, age, size, veterinaryDiet, brand, name} = req.body
  const editFeed = await Feed.findByIdAndUpdate({ _id: req.params.id }, { img, type, age, size, veterinaryDiet, brand, name })
  res.json({ status: true })
})

router.post("/addblood", (req, res) => {
    const { spacies, owner, LDH, ALT, AST, ALB, T_Pro, T_Bil, GLU, T_Cho, ALP } =
      req.body;
  if (spacies === 'Кошка') {
    const newBlood = new AnalysesBioCat({
      owner,
      LDH,
      ALT,
      AST,
      ALB,
      T_Pro,
      T_Bil,
      GLU,
      T_Cho,
      ALP,
    });
    newBlood.save();
    res.json({ message: true });
  } else {
    const newBlood = new AnalysesBioDog({
      owner,
      LDH,
      ALT,
      AST,
      ALB,
      T_Pro,
      T_Bil,
      GLU,
      T_Cho,
      ALP,
    });
    newBlood.save();
    res.json({ message: true });
  }
});

router.post("/addhormonal", (req, res) => {
  const { spacies, owner, ACT, ALD, INS, PTH, T4, COR, GAS } = req.body;
  if (spacies === 'Кошка') {
    const newBlood = new AnalysesGormonsCat({
      spacies,
      owner,
      ACT,
      ALD,
      INS,
      PTH,
      T4,
      COR,
      GAS,
    });
    newBlood.save();
    res.json({ message: true });
  } else {
    const newBlood = new AnalysesGormonsDog({
      spacies,
      owner,
      ACT,
      ALD,
      INS,
      PTH,
      T4,
      COR,
      GAS,
    });
    newBlood.save();
    res.json({ message: true });
  }
});

router.post("/addpee", (req, res) => {
  const { spacies, owner, AN16110, AN116, AN28110, AN15110, AN114 } = req.body;
  if (spacies === "Кошка") {
    const newBlood = new AnalysesUrineCat({
      spacies,
      owner,
      AN16110,
      AN116,
      AN28110,
      AN15110,
      AN114,
    });
    newBlood.save();
    res.json({ message: true });
  } else {
    const newBlood = new AnalysesUrineDog({
      spacies,
      owner,
      AN16110,
      AN116,
      AN28110,
      AN15110,
      AN114,
    });
    newBlood.save();
    res.json({ message: true });
  }
});

module.exports = router
