export default {

  env: process.env.APP_ENV || 'production',

  secret: process.env.APP_SECRET || 'secret',

  port: process.env.APP_PORT || 3000,

  trustProxy: process.env.APP_TRUST_PROXY || false

}
