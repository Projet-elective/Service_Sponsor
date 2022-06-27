const express = require('express')
const SponsorCode = require('../models/SponsorCode')
const router = express.Router()

/* GET users */
router.get('/yy/', async (req, res) => {
  const results = await SponsorCode.find({}).exec()
  res.send(results)
})

/* GET user by ID */
router.get('/get/:id', async (req, res) => {
  try {
    const resultId = await SponsorCode.findById(req.params.id)
    res.send(resultId)
  } catch (err) {
    res.send(err)
  }
})

router.post('/post/', async (req, res) => {
  try {
    const sponsorCode = new SponsorCode()
    sponsorCode.user = req.body.user
    sponsorCode.code = req.body.code

    await sponsorCode.save()

    res.status(201).send(sponsorCode)
  } catch (error) {
    res.send(error)
  }
})

router.post('/p/', async (req, res) => {
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
