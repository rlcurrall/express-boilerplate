import morgan from 'morgan'
import { Express } from 'express'
import { RouterConf } from '@types'
import ServiceProvider from '@lib/foundation/providers/route-service-provider'

export default class RouteServiceProvider extends ServiceProvider {

  public constructor(app: Express) {

    super(app)

  }

  protected middleware(app: Express): void {

    app.use(morgan('tiny', {
      stream: {
        write: function (message: string): void {
          logger.info(message.trim())
        }
      }
    }))

  }

  protected routes(): Array<RouterConf> {
    return [
      {
        prefix: '/',
        router: 'WebRouter'
      },
      {
        prefix: '/api',
        router: 'ApiRouter'
      }
    ]
  }

}
