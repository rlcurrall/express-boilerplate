import { InjectionToken } from 'tsyringe'
import { Middleware } from 'lib/foundation/typings'
import BaseAppFactory from 'lib/foundation/app.factory'

import ApiController from 'app/controllers/api.controller'
import HomeController from 'app/controllers/home.controller'
import BaseController from 'lib/foundation/base.controller'

export default class AppFactory extends BaseAppFactory {

  /**
   * Register and resolve all controllers that will be used by the application.
   *
   * @member { Array<InjectionToken<BaseController>> }
   */
  protected controllers: Array<InjectionToken<BaseController>> = [

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
