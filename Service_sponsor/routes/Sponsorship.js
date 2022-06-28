const express = require('express')
const SponsorshipController = require('../controllers/SponsorshipController')
const router = express.Router()

/* GET users */
router.get('/', SponsorshipController.get);

/* GET user by ID */
router.get('/get/:id', SponsorshipController.getId);

router.post('/add/', SponsorshipController.add);

router.delete('/delete/:id', SponsorshipController.delete);

module.exports = router
