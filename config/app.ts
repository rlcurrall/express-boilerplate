export default {
  
  env: process.env.APP_ENV || 'production',

  port: process.env.APP_PORT || 3000,
  
  secret: process.env.APP_SECRET || 'secret',

  key: process.env.APP_KEY || './storage/certs/server.key',

  cert: process.env.APP_CERT || './storage/certs/server.cert',

  passphrase: process.env.APP_PASSPHRASE || ''

}
