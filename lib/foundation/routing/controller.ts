import { Router } from 'express'
import { container, InjectionToken } from 'tsyringe'

import { Middleware, RouteDefinition } from '../typings'
import { IController } from '../interfaces'

export default class Controller implements IController {

  public router: Router

  public prefix: string

  constructor() {

    this.router = Router()

  }

  protected middleware: Array<InjectionToken> = []

  public registerMiddleware(): this {

    for (const m of this.middleware) {

      const mwFn: Middleware = container.resolve<Middleware>(m)
      this.router.use(mwFn)

    }

    return this

  }

  public mapActions(definitions: RouteDefinition[]): this {

    for (const i in definitions) {

      const d = definitions[i]
      const fn = d.handler

      this.router[d.method](d.path, (req, res, next) => fn.call(this, req, res, next))

    }

    return this

  }

}
