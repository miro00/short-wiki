const express = require('express')
const router = express.Router()

const categories_controller = require('../controllers/categories.controller')

router.get("/", categories_controller.index)
router.post('/', categories_controller.create)
router.get('/:id', categories_controller.getById)
router.get('/:id/articles', categories_controller.getArticles)

module.exports = router