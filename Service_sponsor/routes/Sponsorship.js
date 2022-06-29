const express = require('express')
const SponsorshipController = require('../controllers/SponsorshipController')
const router = express.Router()

router.get('/', SponsorshipController.getAll);

router.get('/get/:id', SponsorshipController.get);

router.post('/add/', SponsorshipController.add);

router.delete('/delete/:id', SponsorshipController.delete);

module.exports = router
