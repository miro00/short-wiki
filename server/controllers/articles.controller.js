const Article = require('../models/articles.model')

module.exports = {
  index: (req, res) => {
    Article.get(req.db, (err, result) => {
      if (err) return console.error(err)
      res.send(result)
    })
  },

  getByCatId: (req, res) => {
    Article.getByCatId(req.db, req.params.id, (err, result) => {
      if (err) return console.error(err)
      res.send(result)
    })
  },

  create: (req, res) => {
    Article.create(req.db, req.body, (err, result) => {
      if (err) return console.error(err)
      res.send(result)
    })
  }
}