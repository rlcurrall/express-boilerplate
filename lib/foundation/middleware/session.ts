import session from 'express-session'

export default session({
  secret: env('APP_SECRET', 'secret'),
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: env('APP_ENV', 'production') === 'production',
    maxAge: 60000
  }
})
