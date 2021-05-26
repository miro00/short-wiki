const express = require('express')
const router = express.Router()

const categories_controller = require('../controllers/categories.controller')

router.get("/", categories_controller.index)
// router.get("/category:category", categories_controller.getByUrl)
router.get("/:id/subcategories", categories_controller.getSubCategoriesByParent)
router.get("/subcategories", categories_controller.getSubCategories)

module.exports = router