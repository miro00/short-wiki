const User = require('../models/users.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const accessTokenSecret = 'secrettoneeffeenfefefes' //FIXME: поменять токен jwt
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
        const accessToken = jwt.sign({
          loggedIn: true,
          user: result
        }, accessTokenSecret, {expiresIn: '24h'})
        res.json({accessToken, token: accessToken})
      } else {
        res.send({
          message: "Пользователь не найден"
        })
      }
    })
  },

  getLogin: (req, res) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
      const token = authHeader.split(' ')[1]
      jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) return 
        req.user = user
        res.send(user)
      })
    } else {
      res.send({loggedIn: false})
    }
  },

  logout: (req, res) => {
    if (req.session.user) {
      User.getById(req.db, req.session.user[0].id_user, (err, result) => {
        if (err) return 
        req.session.destroy()
        res.send(result)
      })
    }
  },

  getById: (req, res) => {
    User.getById(req.db, req.params.id, (err, result) => {
      if (err) return console.error(err)
      res.send(result)
    })
  }

}