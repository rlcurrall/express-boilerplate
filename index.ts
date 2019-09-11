import 'reflect-metadata'
import https from 'https'
import config from 'config'
import { readFileSync } from 'fs'
import morgan from 'morgan'
import helmet from 'helmet'
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

import { logger } from './lib/foundation/helpers'
import AppFactory from './app/app-factory'


/*
|--------------------------------------------------------------------------
| Application Instance
|--------------------------------------------------------------------------
|
| Using the application factory, a new instance of the application will be
| created.
|
*/

const server = new AppFactory()


/*
|--------------------------------------------------------------------------
| Default Global Middleware
|--------------------------------------------------------------------------
|
| These are middleware that have been determined to be necessary regardless
| of the application, therefore they are defined outside of the application
| factory.
|
*/

server.use(bodyParser.json())

  .use(bodyParser.urlencoded({ extended: true }))

  .use(helmet())

  .use(cookieParser())

  .use(morgan('tiny', {
    stream: {
      write: function (message: string): void {
        logger.info(message.trim())
      }
    }
  }))


/*
|--------------------------------------------------------------------------
| Start Application
|--------------------------------------------------------------------------
|
| Start the application listening on the desired port.
|
*/

server.boot()

https
  .createServer(
    {
      key: readFileSync(config.get('app.tls.key')),
      cert: readFileSync(config.get('app.tls.cert')),
      passphrase: config.get('app.tls.passphrase')
    },
    server.app
  )
  .listen(config.get('app.port'), () => {
    logger.info('Server started!')
  })
