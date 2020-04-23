import auth0 from '../../middleware/aut0';

export default async function me(req, res) {
  try {
    await auth0.handleProfile(req, res, { refetch: true });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}