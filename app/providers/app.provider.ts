import { container } from 'tsyringe'
import { EventEmitter } from 'events'

/*
|--------------------------------------------------------------------------
| Define DI Providers
|--------------------------------------------------------------------------
|
| The dependency injection container we are using, Tsyringe, has the notion
| of 'providers'. Here you can specify the providers for specific modules
| for the application.
|
*/

import './middleware.provider'

/*
|--------------------------------------------------------------------------
| Register Event Emitter
|--------------------------------------------------------------------------
|
| Register the event emitter for the application.
|
*/

import eventEmitter from './event.provider'

container.register(EventEmitter, { useValue: eventEmitter })
