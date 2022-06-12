module.exports = ({ env }) => ({
  proxy: true,
  url: env('MY_HEROKU_URL'),
  app: {
    keys: env.array('APP_KEYS')
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  auth: {
    secret: env('JWT_SECRET'),
  },
})
