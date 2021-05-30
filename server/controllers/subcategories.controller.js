const Subcategories = require('../models/subcategories.model')

module.exports = {

  index: (req, res) => {
    Subcategories.getAll(req.db, (err, result) => {
      if (err) console.error(err)
      res.send(result)
    })
  },

  create: (req, res) => {
    Subcategories.create(req.db, req.body, (err, result) => {
      if (err) console.error(err)
      res.send(result)
    })
  },

  getById: (req, res) => {
    Subcategories.getById(req.db, req.params.id, (err, result) => {
      if (err) console.error(err)
      res.send(result)
    })
  },

  getByParentId: (req, res) => {
    Subcategories.getByParentId(req.db, res.params.id, (err, result) => {
      if (err) console.error(err)
      console.log(res.params)
      res.send(result)
    })
  },

  update: (req, res) => {
    Subcategories.update(req.db, req.params.id, req.body, (err, result) => {
      if (err) console.error(err)
      res.send(result)
    })
  },

  delete: (req, res) => {
    Subcategories.delete(req.db, req.params.id, (err, result) => {
      if (err) console.error(err)
      res.send(result)
    })
  },

}
