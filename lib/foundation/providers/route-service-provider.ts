/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Express, RequestHandler } from 'express'
import { IController } from '../interfaces'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

export default class RouteServiceProvider {

  public app: Express

  protected controllers: Array<IController>

  protected middleware: Array<RequestHandler>

  constructor() {

    this.app = express()

    this.app.use(bodyParser.json())

    this.app.use(bodyParser.urlencoded({ extended: true }))

    this.app.use(helmet())

    this.app.use(cookieParser())

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
