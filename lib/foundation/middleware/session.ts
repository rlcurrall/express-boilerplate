import { config } from 'lib/foundation/helpers'
import session from 'express-session'

export default session({
  resave: false,
  saveUninitialized: true,
  secret: config('app.secret') as string,
  cookie: {
    secure: false,
    maxAge: 60000
  }
})
