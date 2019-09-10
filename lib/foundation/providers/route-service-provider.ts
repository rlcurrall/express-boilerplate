/* eslint-disable @typescript-eslint/no-unused-vars */
import { Express } from 'express'

export default class RouteServiceProvider {

  constructor(protected app: Express) {

    this.middleware().routes()

  }

  protected middleware(): RouteServiceProvider {

    // Apply Middleware

    return this

  }

  protected routes(): RouteServiceProvider {

    // Map Routes

    return this

  }

}
