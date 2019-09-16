import 'tsconfig-paths/register'

if (process.env.NODE_ENV === 'production') {
  require('ts-node/register/transpile-only')
}
