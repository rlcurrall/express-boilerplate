import { InjectionToken } from 'tsyringe'
import BaseServer from 'lib/foundation/server'
import { Middleware } from 'lib/foundation/typings'
import Controller from 'lib/foundation/routing/controller'
import nunjucks from 'nunjucks'

import ApiController from 'app/controllers/api.controller'
import HomeController from 'app/controllers/home.controller'
import morganLogger from 'lib/foundation/middleware/morgan.logger'

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
    morganLogger

  ]

  protected templateEngine(): void {

    console.log('register engine')

    this.app.set('view engine', 'nunjucks')

    nunjucks.configure('views', {
      autoescape: true,
      express: this.app
    })

  }

}
