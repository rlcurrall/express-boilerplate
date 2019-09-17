import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import { container, InjectionToken } from 'tsyringe'
import express, { Express, json, urlencoded } from 'express'

import { Middleware } from './typings'
import Controller from './routing/controller'
import { config, logStart } from './helpers'

export default class Server {

  public app: Express

  protected controllers: Array<InjectionToken<Controller>>

  protected middleware: Array<Middleware>

  constructor() {

    this.app = express()

  }

  public boot(): this {

    this.templateEngine()

    this.registerMiddleware()

    this.mapControllers()

    return this

  }

  public listen(callback?: Function): this {

    this.app.listen(config('app.port'), () => {

      logStart()

      if (callback) {
        callback()
      }

    })

    return this

  }

  protected mapControllers(): void {

    for (const controller of this.controllers) {

      const prefix = Reflect.getMetadata('prefix', controller)
      const routes = Reflect.getMetadata('routes', controller)

      const instance = container.resolve(controller)

      instance
        .registerMiddleware()
        .mapActions(routes)

      this.app.use(prefix, instance.router)

    }

  }

  protected registerMiddleware(): void {

    this.defaultMiddleware()

    for (const m of this.middleware) {

      this.app.use(m)

    }

  }

  protected templateEngine(): void {

    // Configure template engine

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

      .use(json())

      .use(urlencoded({ extended: true }))

      .use(helmet())

      .use(cookieParser())

  }

}
