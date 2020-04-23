import nextConnect from 'next-connect'
import auth from '../../middleware/auth'
import auth0 from '../../middleware/aut0'

const handler = nextConnect()

handler.use(auth).get((req, res) => {
  req.logOut()
  res.status(204).end()
})

export default async function handler(req, res) {
  try {
    await auth0.handleLogin(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message)
  }
}
