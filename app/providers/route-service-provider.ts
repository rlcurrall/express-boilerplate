import morgan from 'morgan'
import { RequestHandler } from 'express'
import logger from 'lib/foundation/helpers/logger'
import ServiceProvider from 'lib/foundation/providers/route-service-provider'
import ApiController from 'app/controllers/api-controller'
import { resolve } from 'lib/foundation/helpers'
import { IController } from 'lib/foundation/interfaces'
import HomeController from 'app/controllers/home-controller'

export default class RouteServiceProvider extends ServiceProvider {

  public constructor() {

    super()

    this.registerMiddleware()

    this.mapRoutes()

  }

  protected controllers: Array<IController> = [

    resolve<ApiController>(ApiController),
    resolve<HomeController>(HomeController)

  ]

  protected middleware: Array< RequestHandler> = [

    morgan('tiny', {
      stream: {
        write: function (message: string): void {
          logger.info(message.trim())
        }
      }
    })

  ]

}
