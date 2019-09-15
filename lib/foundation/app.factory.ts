import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import { Middleware } from './typings'
import cookieParser from 'cookie-parser'
import { logger, config } from 'lib/foundation/helpers'
import { container, InjectionToken } from 'tsyringe'
import express, { Express } from 'express'
import BaseController from 'lib/foundation/base.controller'

export default class AppFactory {

  public app: Express

  protected controllers: Array<InjectionToken<BaseController>>

  protected middleware: Array<Middleware>

  constructor() {

    this.app = express()

  }

  public boot(): this {

    this.registerMiddleware()

    this.mapRoutes()

    return this

  }

  protected mapRoutes(): void {

    for (const controller of this.controllers) {

      const c = container.resolve(controller)

      c.initialize()

      this.app.use(c.prefix, c.router)

    }

  }

  protected registerMiddleware(): void {

    this.defaultMiddleware()

    for (const m of this.middleware) {

      this.app.use(m)

    }

  }

  /**
   * @name defaultMiddleware
   *
   * @description These are middleware that have been determined to be necessary
   * regardless of the application, therefore they are defined outside of the
   * application factory.
   *
   * @returns void
   */
  private defaultMiddleware(): void {

    if (config('app.trustProxy')) {

      this.app.enable('trust proxy')

    }

    this.app

      .use(bodyParser.json())

      .use(bodyParser.urlencoded({ extended: true }))

      .use(helmet())

      .use(cookieParser())

      .use(morgan('tiny', {
        stream: {
          write: function (message: string): void {
            logger.info(message.trim())
          }
        }
      }))

  }

}
