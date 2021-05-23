const express = require('express')
const router = express.Router()

const categories_controller = require('../controllers/categories.controller')

router.get("/", categories_controller.index)
router.get("/:category", categories_controller.getByUrl)

module.exports = router