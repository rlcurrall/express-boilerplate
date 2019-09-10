import config from 'config'
import session from 'express-session'

export default session({
  resave: false,
  saveUninitialized: true,
  secret: config.get('app.secret'),
  cookie: {
    secure: config.get('app.env') === 'production',
    maxAge: 60000
  }
})
