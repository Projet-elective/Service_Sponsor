const express = require('express')
const UserRoleController = require('../controllers/UserRoleController')
const router = express.Router()

/* GET users */
router.get('/', UserRoleController.get);


module.exports = router
