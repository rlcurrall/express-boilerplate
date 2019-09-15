import { config } from '../helpers'
import session from 'express-session'

export default session({
  name: 'sessionId',
  resave: false,
  saveUninitialized: true,
  secret: config('app.key') as string || 'secret',
  cookie: {
    secure: config('app.env') === 'production',
    maxAge: 60000
  },
})
