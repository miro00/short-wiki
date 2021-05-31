const Category = require("../models/categories.model");

module.exports = {
  index: (req, res) => {
    Category.get(req.db, (err, result) => {
      if (err) return console.error(err);
      res.send(result)     
    });
  },


  getByUrl: (req, res) => {
    Category.getByUrl(req.db, req.url.substr(1), (err, result) => {
      if (err) return console.error(err)
      res.send(result)
    })
  },

  getById: (req, res) => {
    Category.getById(req.db, req.params.id, (err, result) => {
      if (err) return console.error(err)
      res.send(result)
    })
  },

  create: (req, res) => {
    Category.create(req.db, req.body, (err, result) => {
      if (err) return console.error(err)
      res.send(result)
    })
  },

  getArticles: (req, res) => {
    Category.getArticles(req.db, req.params.id, (err, result) => {
      if (err) return console.error(err)
      res.send(result)
    })
  },


};
