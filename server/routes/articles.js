const express = require('express')
const router = express.Router()

const articles_controller = require('../controllers/articles.controller')

router.get('/', articles_controller.index)
router.get('/:id', articles_controller.getByCatId)
router.post('/', articles_controller.create)

module.exports = router