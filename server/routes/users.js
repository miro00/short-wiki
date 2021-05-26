const express = require('express')
const router = express.Router()

const users_controller = require('../controllers/users.controller')

router.get('/', users_controller.index)
router.get('/login', users_controller.getLogin)
router.post('/login', users_controller.login)
router.get('/logout', users_controller.logout)
router.get('/:id', users_controller.getById)

module.exports = router