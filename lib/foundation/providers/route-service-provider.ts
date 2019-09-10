/* eslint-disable @typescript-eslint/no-unused-vars */
import { Express } from 'express'
import { container } from 'tsyringe'
import { RouterConfig } from 'lib/@types'

export default class RouteServiceProvider {

  constructor(protected app: Express) {

    this.middleware(app)

    this.mapRoutes()

  }

  protected middleware(app: Express): void {

    // Apply Middleware

  }

  protected routes(): Array<RouterConfig> {

    return []

  }

  private mapRoutes(): void {

    for (const route of this.routes()) {

      const routerClass: any = container.resolve(route.router)

      this.app.use(route.prefix, routerClass.register().getRouter())
    }

  }

}
