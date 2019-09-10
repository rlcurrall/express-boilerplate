import morgan from 'morgan'
import { Express } from 'express'
import ApiRouter from 'app/routes/api'
import WebRouter from 'app/routes/web'
import logger from 'lib/foundation/helpers/logger'
import ServiceProvider from 'lib/foundation/providers/route-service-provider'

function write(message: string): void {
  logger.info(message.trim())
}

export default class RouteServiceProvider extends ServiceProvider {

  public constructor(app: Express) {

    super(app)

  }

  protected middleware(): RouteServiceProvider {

    this.app

      .use(morgan('tiny', {
        stream: {
          write
        }
      }))

    return this

  }

  protected routes(): RouteServiceProvider {

    this.app
    
      .use('/', WebRouter)

      .use('/api', ApiRouter)

    return this

  }

}
