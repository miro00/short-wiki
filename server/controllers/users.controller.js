const User = require('../models/users.model')

module.exports = {
  index: (req, res) => {
    User.get(req.db, (err, result) => {
      if (err) return console.error(err)
      res.send(result)
    })
  },
  login: (req, res) => {
    User.login(req.db, req.body.userLogin, req.body.userPassword, (err, result) => {
      if (err) return console.error(err)
      if (result.length) {
        req.session.user = result
        res.send(result)
      } else {
        res.send({
          message: "Пользователь не найден"
        })
      }
    })
  },
  getLogin: (req, res) => {
    if (req.session.user) {
      req.session.save((err) => {
        if (!err) {
          res.send({loggedIn: true, user: req.session.user})
        }
      })
    } else {
      res.send({loggedIn: false})
    }
  },
  getById: (req, res) => {
    if (req.session.user) {
      User.getById(req.db, req.session.user[0].id_user, (err, result) => {
        if (err) return console.error(err)
        req.session.destroy()
        res.send(result)
      })
    }
  }
}