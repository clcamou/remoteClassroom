import passport from 'passport'
import LocalStrategy from 'passport-local'
import { findUserByUsername } from './db'
const User = require('../server/database/models/user')
const argon2 = require('argon2')

passport.serializeUser(function(user, done) {
  // serialize the username into session
  console.log('*** serializeUser called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
  done(null, user.username)
})

passport.deserializeUser(function(req, id, done) {
  // deserialize the username back into user object
  User.findUserByUsername(req, id)
  done(null, user)
})

passport.use(
  new LocalStrategy(
    { usernameField: 'email', 
      passwordField: 'password', 
      roleField: 'role',
      session: false },
    (req, username, password, role, done) => {
      // Here you lookup the user in your DB and compare the password/hashed password
      const user = findUserByUsername(req, username)
      // Security-wise, if you hashed the password earlier, you must verify it
      if (!user || await argon2.verify(user.password, password))
      if (!user || user.password !== password) {
        done(null, null)
      } else {
        done(null, user)
      }
    }
  )
)

export default passport
