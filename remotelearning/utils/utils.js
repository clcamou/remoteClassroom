
import passport from 'passport'
import jwt from 'jsonwebtoken'
import argon2 from 'argon2'
import { UserModel } from './database/models'
import { Roles } from '../database/models/user'

const setup = () => {
  passport.serializeUser((user, done) => done(null, user._id))

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await UserModel.findById(id)
      return done(null, user)
    } catch (err) {
      return done(err, null)
    }
  })
}

const signToken = user => {
  return jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: 604800
  })
}
const hashPassword = async password => {
    if (!password) {
      throw new Error('Password was not provided')
    }
  
    const salt = await argon2.genSalt(10)
    return await argon2.hash(password, salt)
  }
  
  const verifyPassword = async (candidate, actual) => {
    return await argon2.compare(candidate, actual)
  }
  
  const checkIsInRole = (...roles) => (req, res, next) => {
    if (!req.user) {
      return res.redirect('/login')
    }
  
    const hasRole = roles.find(role => req.user.role === role)
    if (!hasRole) {
      return res.redirect('/login')
    }
  
    return next()
  }
  

  export { setup, signToken, hashPassword, verifyPassword, checkIsInRole }