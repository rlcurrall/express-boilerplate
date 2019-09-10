import morgan = require('morgan')
import { Express } from 'express'
import { RouterConfig } from 'lib/@types'
import ServiceProvider from 'lib/foundation/providers/route-service-provider'
import logger from 'lib/foundation/helpers/logger'

export default class RouteServiceProvider extends ServiceProvider {

  public constructor(app: Express) {

    super(app)

  }

  /**
   * Apply global middleware to the Express application.
   *
   * @param app Express application
   */
  protected middleware(app: Express): void {

    app.use(morgan('tiny', {
      stream: {
        write: function (message: string): void {
          logger.info(message.trim())
        }
      }
    }))

  }

  /**
   * Define routes for the application.
   */
  protected routes(): Array<RouterConfig> {
    return [
      {
        prefix: '/',
        router: 'App/Routes/WebRouter'
      },
      {
        prefix: '/api',
        router: 'App/Routes/ApiRouter'
      }
    ]
  }

}
