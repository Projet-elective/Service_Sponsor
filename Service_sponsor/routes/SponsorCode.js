const express = require('express')
const SponsorCodeController = require('../controllers/SponsorCodeController')
const router = express.Router()


router.get('/', SponsorCodeController.getAll);

router.get('/get/:id', SponsorCodeController.getId);

router.post('/add', SponsorCodeController.add);

router.delete('/delete/:id', SponsorCodeController.delete);

module.exports = router
