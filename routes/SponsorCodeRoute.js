const express = require('express')
const SponsorCode = require('../models/SponsorCode')
const router = express.Router()

/* GET users */
router.get('/', async (req, res) => {
  const results = await SponsorCode.find({}).exec()
  res.send(results)
})

/* GET user by ID */
router.get('/:id', async (req, res) => {
  const resultId = await SponsorCode.findOne({ id: String(req.params.id) }).exec()
  res.send(resultId)
})

router.post('/', async (req, res) => {
  try {
    const sponsorCode = new SponsorCode()
    sponsorCode.id = String(req.body.id)
    sponsorCode.user = req.body.user
    sponsorCode.code = String(req.body.code)

    await sponsorCode.save()

    res.status(201).send(sponsorCode)
  } catch (error) {
    res.sendStatus(400)
  }
})

router.post('/', async (req, res) => {
  const sponsorCodeId = req.body.id
  const sponsorCodeUser = req.body.name
  const sponsorCodeCode = req.body.description

  const sponsorCode = new SponsorCode()
  SponsorCode.id = sponsorCodeId
  SponsorCode.user = sponsorCodeUser
  SponsorCode.code = sponsorCodeCode

  sponsorCode.save(function (err) {
    if (err) res.send(err.message)
    else res.status(201).send(sponsorCode)
  })
})

router.delete('/:id', (req, res) => {
  const found = SponsorCode.find(SponsorCode => SponsorCode.id === String(req.params.id))
  const foundIndex = SponsorCode.findIndex(SponsorCode => SponsorCode.id === String(req.params.id))
  if (!found) {
    return res.status(404).send()
  }
  SponsorCode.splice(foundIndex, 1)
  res.status(204).send()
})

router.patch('/:id', (req, res) => {
  const found = SponsorCode.find(SponsorCode => SponsorCode.id === String(req.params.id))
  if (!found) {
    return res.status(404).send()
  }
  found.user = req.body.user || found.user
  found.code = req.body.code || found.code

  res.status(200).send({
    status: 'Success',
    result: found
  })
})

module.exports = router
