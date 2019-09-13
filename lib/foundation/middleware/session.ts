import config from 'config'
import session from 'express-session'

export default session({
  resave: false,
  saveUninitialized: true,
  secret: config.get('app.secret'),
  cookie: {
    secure: false,
    maxAge: 60000
  }
})
