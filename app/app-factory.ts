import { container } from 'tsyringe'
import { RequestHandler } from 'express'
import BaseAppFactory from 'lib/foundation/app-factory'
import { IController } from 'lib/foundation/interfaces'

import ApiController from 'app/controllers/api-controller'
import HomeController from 'app/controllers/home-controller'

export default class AppFactory extends BaseAppFactory {

  /**
   * Register and resolve all controllers that will be used by the application.
   *
   * @member { Array<IController> }
   */
  protected controllers: Array<IController> = [

    container.resolve<ApiController>(ApiController),
    container.resolve<HomeController>(HomeController)

  ]

  /**
   * Define the custom global middleware for the application.
   *
   * @member { Array<RequestHandler> }
   */
  protected middleware: Array<RequestHandler> = [

    // Place custom global middleware here

  ]

}
