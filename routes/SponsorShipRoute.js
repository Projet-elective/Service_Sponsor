const express = require('express')
const SponsorShip = require('../models/SponsorShip')
const router = express.Router()

/* GET users */
router.get('/', async (req, res) => {
  const results = await SponsorShip.find({}).exec()
  res.send(results)
})

/* GET user by ID */
router.get('/:id', async (req, res) => {
  const resultId = await SponsorShip.findOne({ id: String(req.params.id) }).exec()
  res.send(resultId)
})

router.post('/', async (req, res) => {
  try {
    const sponsorCode = new SponsorShip()
    sponsorCode.id = String(req.body.id)
    sponsorCode.sponsor = req.body.sponsor
    sponsorCode.sponsored = req.body.sponsored

    await sponsorCode.save()

    res.status(201).send(sponsorCode)
  } catch (error) {
    res.sendStatus(400)
  }
})

router.delete('/:id', (req, res) => {
  const found = SponsorShip.find(SponsorShip => SponsorShip.id === String(req.params.id))
  const foundIndex = SponsorShip.findIndex(SponsorShip => SponsorShip.id === String(req.params.id))
  if (!found) {
    return res.status(404).send()
  }
  SponsorShip.splice(foundIndex, 1)
  res.status(204).send()
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
