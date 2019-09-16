import { InjectionToken } from 'tsyringe'
import { Middleware } from 'lib/foundation/typings'
import BaseServer from 'lib/foundation/server'

import ApiController from 'app/controllers/api.controller'
import HomeController from 'app/controllers/home.controller'
import Controller from 'lib/foundation/routing/controller'

export default class Server extends BaseServer {

  /**
   * Register and resolve all controllers that will be used by the application.
   *
   * @member { Array<InjectionToken<BaseController>> }
   */
  protected controllers: Array<InjectionToken<Controller>> = [

    ApiController,
    HomeController,

  ]

  /**
   * Define the custom global middleware for the application.
   *
   * @member { Array<Middleware> }
   */
  protected middleware: Array<Middleware> = [

    // Place custom global middleware here

  ]

}
