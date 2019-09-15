export default {

  env: process.env.APP_ENV || 'production',

  // key: process.env.APP_KEY || 'secret',

  port: process.env.APP_PORT || 3000,

  trustProxy: process.env.APP_TRUST_PROXY || false

}
