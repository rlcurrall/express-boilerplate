/*
|--------------------------------------------------------------------------
| Register Middleware
|--------------------------------------------------------------------------
|
| Middleware are registered with the DI container so that they can be
| applied to controllers by using the string token identifiers.
|
*/

import { container } from 'tsyringe'
import { Middleware } from 'lib/foundation/typings'

import csurf from 'csurf'
import session from 'lib/foundation/middleware/session'

container
  .register<Middleware>('session', { useValue: session })
  .register<Middleware>('csurf', { useValue: csurf({ cookie: true }) })
  .register<Middleware>('web', { useValue: [session, csurf({ cookie: true })] })
