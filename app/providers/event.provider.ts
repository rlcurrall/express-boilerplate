import { EventEmitter } from 'events'

/*
|--------------------------------------------------------------------------
| Event Emitter
|--------------------------------------------------------------------------
|
| Create an event emitter that will register events in the application.
| This is a simple event emitter for performing asynchronous actions, but
| is not a proper queue, so should not be utilized for resource intensive
| task such as video processing.
|
*/

const eventEmitter = new EventEmitter()


/*
|--------------------------------------------------------------------------
| Register Events
|--------------------------------------------------------------------------
|
| Register the events for the application.
|
*/

eventEmitter.on('someEvent', () => {
  console.log('Logging Something!')
})

export default eventEmitter
