const express = require ('express')
const router = express.Router()
const {login, register, data} = require('../controllers/usersControllers')
const {protect} = require ('../middleware/authMiddleware')

//endpoints público
router.post('/login', login)
router.post('/register', register)

//endpoint privado todavía sin protección
router.get('/data', protect, data)

module.exports = router