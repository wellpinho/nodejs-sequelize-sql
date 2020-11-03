const express = require('express')
const router = express.Router()

const userController = require('./../controllers/UserController')
const addressController = require('./../controllers/AddressController')
const techsControllers = require('./../controllers/TechController')
const ReportController = require('../controllers/ReportController')

router.get('/users', userController.index)
router.post('/users', userController.store)

router.get('/users/:user_id/addresses', addressController.index)
router.post('/users/:user_id/addresses', addressController.store)

router.get('/users/:user_id/techs', techsControllers.index)
router.post('/users/:user_id/techs', techsControllers.store)
router.delete('/users/:user_id/techs', techsControllers.delete)

router.get('/report', ReportController.show)
module.exports = router