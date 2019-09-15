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
import http from 'http'
import { logStart, config } from './lib/foundation/helpers'

/*
|--------------------------------------------------------------------------
| Application Imports
|--------------------------------------------------------------------------
|
| All imports specific to the application. This occurs after the bootstrap
| import to ensure there all helpers are available.
|
*/

import './app/providers/app.provider'
import AppFactory from './app/server'


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

server.boot()


/*
|--------------------------------------------------------------------------
| Start Application
|--------------------------------------------------------------------------
|
| Start the application listening on the desired port.
|
*/

const PORT = config('app.port')

http.createServer(server.app).listen(PORT, logStart)
