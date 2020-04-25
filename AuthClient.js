import createAuth0Client from '@auth0/auth0-spa-js';

//with async/await
const auth0 = await createAuth0Client({
  domain: 'dev-0ihalwzo.auth0.com',
  client_id: 'KADsKfDz5M1egErmqlJ8f4sjsefmggHb',
  redirect_uri: 'http://localhost:3000/api/callback',
});

