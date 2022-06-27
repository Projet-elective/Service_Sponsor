const express = require('express')
const SponsorShip = require('../models/SponsorShip')
const router = express.Router()

/* GET users */
router.get('/', async (req, res) => {
  const results = await SponsorShip.find({}).exec()
  res.send(results)
})

/* GET user by ID */
router.get('/get/:id', async (req, res) => {
  try {
    const resultId = await SponsorShip.findById(req.params.id).populate('idCode')
    res.send(resultId)
  } catch (err) {
    res.send(err)
  }
})

router.post('/post/', async (req, res) => {
  try {
    const SponsorS = new SponsorShip()
    SponsorS.idCode = req.body.idCode
    SponsorS.sponsor = req.body.sponsor
    SponsorS.sponsored = req.body.sponsored

    await SponsorS.save()

    res.status(201).send(SponsorS)
  } catch (error) {
    res.send(error)
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const resultId = await SponsorShip.findByIdAndDelete(req.params.id).populate('idCode')
    res.send(resultId)
  } catch (err) {
    res.send(err)
  }
})

router.patch('/:id', (req, res) => {
  const found = SponsorShip.find(SponsorShip => SponsorShip.id === String(req.params.id))
  if (!found) {
    return res.status(404).send()
  }
  found.sponsor = req.body.sponsor || found.sponsor
  found.sponsored = req.body.sponsored || found.sponsored

  res.status(200).send({
    status: 'Success',
    result: found
  })
})

module.exports = router
