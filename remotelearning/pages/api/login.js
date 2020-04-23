import nextConnect from 'next-connect'
import auth from '../../middleware/auth'
import passport from '../../lib/passport'
import auth0 from '../../middleware/aut0'

const handler = nextConnect()

handler.use(auth).post(passport.authenticate('local'), (req, res) => {
  res.json({ user: req.user })
})

export default async function handler(req, res){
  try {
    await auth0.handleLogin(res, req);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}


