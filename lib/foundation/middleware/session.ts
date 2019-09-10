import session from 'express-session'
import config from 'config'

export default session({
  secret: config.get('app.secret'),
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: config.get('app.env'),
    maxAge: 60000
  }
})
