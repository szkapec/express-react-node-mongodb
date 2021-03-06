const express = require('express')
const users = express.Router()

const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {

  const today = new Date()
  const userData = {
    username: req.body.username,
    
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    date: today,
    premium: false,
    admin: false,
  }
 
  User.findOne({ //znajdz jeden
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
                console.log(req.body.email)
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('COS POSZLO NIE TAK: ' + err)
    })

})




users.post('/login', (req, res) => {


  User.findOne({
    email: req.body.email
  })
    .then(user => {
      console.log("JEST")
      if (user) {
        console.log("Uzytkownik user")
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const today = new Date()
          const payload = {
            _id: user._id,
            username: user.username,
            last_name: user.last_name,
            email: user.email,
            date: today,
            premium: user.premium,
            admin: user.admin,
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
          console.log("Zalogowano?")
        } else {
          // Passwords don't match
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})



users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users