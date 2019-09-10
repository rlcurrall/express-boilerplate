import 'reflect-metadata'
import https from 'https'
import helmet from 'helmet'
import express from 'express'
import { readFileSync } from 'fs'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

/*
|--------------------------------------------------------------------------
| Bootstrap & Imports
|--------------------------------------------------------------------------
|
| Run bootstrap scripts and register global functions. This is done before
| any application logic to ensure that helper functions are available in
| all other files.
|
*/

import './bootstrap'
import './app/providers/app-service-provider'

/*
|--------------------------------------------------------------------------
| Application Imports
|--------------------------------------------------------------------------
|
| All imports specific to the application. This occurs after the bootstrap
| import to ensure there all helpers are available.
|
*/
import RouteServiceProvider from './app/providers/route-service-provider'

/*
|--------------------------------------------------------------------------
| Server Instance
|--------------------------------------------------------------------------
|
| The instance of the Express server.
|
*/

const server = express()

/*
|--------------------------------------------------------------------------
| Application Defined Middleware
|--------------------------------------------------------------------------
|
| These are middleware that have been determined to be necessary regardless
| of the application, therefore they are defined outside of the Route
| Service Provider.
|
*/

server.use(bodyParser.json())

server.use(bodyParser.urlencoded({ extended: true }))

server.use(helmet())

server.use(cookieParser())

/*
|--------------------------------------------------------------------------
| Register Routes and Middleware
|--------------------------------------------------------------------------
|
| Register all routes and middleware for the application
|
*/

new RouteServiceProvider(server)


/*
|--------------------------------------------------------------------------
| Start Application
|--------------------------------------------------------------------------
|
| Start the application listening on the desired port.
|
*/
https
  .createServer({
    key: readFileSync(env('APP_KEY', './storage/certs/server.key')),
    cert: readFileSync(env('APP_CERT', './storage/certs/server.cert')),
    passphrase: env('APP_PASSPHRASE', '')
  }, server)
  .listen(env('APP_PORT', 3000), () => {
    logger.info('Server started!')
  })
