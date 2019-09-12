/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Express, RequestHandler } from 'express'
import { IController } from 'lib/foundation/interfaces'

export default class AppFactory {

  public app: Express

  protected controllers: Array<IController>

  protected middleware: Array<RequestHandler>

  constructor() {

    this.app = express()

  }

  public boot(): this {

    this.registerMiddleware()

    this.mapRoutes()

    return this

  }

  public use(handler: RequestHandler): this {

    this.app.use(handler)

    return this

  }

  protected mapRoutes(): void {

    for (const controller of this.controllers) {

      this.app.use(controller.prefix, controller.router)

    }

  }

  protected registerMiddleware(): void {

    for (const m of this.middleware) {

      this.app.use(m)

    }

  }

}
