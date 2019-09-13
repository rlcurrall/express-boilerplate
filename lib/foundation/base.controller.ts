import { Router } from 'express'
import { container, InjectionToken } from 'tsyringe'
import { Middleware } from './typings'
import { IController } from 'lib/foundation/interfaces'

export default class BaseController implements IController {

  public router: Router

  public prefix: string

  constructor() {

    this.router = Router()

  }

  protected middleware: Array<InjectionToken> = []

  protected mapActions(): this {

    return this

  }

  public initialize(): void {

    for (const m of this.middleware) {

      const mwFn: Middleware = container.resolve<Middleware>(m)
      this.router.use(mwFn)

    }

    this.mapActions()

  }

}
