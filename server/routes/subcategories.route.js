const express = require('express')
const router = express.Router({mergeParams: true})

const subcategories_controller = require('../controllers/subcategories.controller')

router.get('/', subcategories_controller.index)
router.get('/:id', subcategories_controller.getById)
router.post('/', subcategories_controller.create)
router.put('/:id', subcategories_controller.update)
router.delete('/:id', subcategories_controller.delete)

router.get('/category/:id', subcategories_controller.getByParentId)

module.exports = router
