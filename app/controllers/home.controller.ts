import { injectable } from 'tsyringe'
import BaseController from 'lib/foundation/base.controller'
import { Request, Response, NextFunction } from 'express'

import SomeService from 'app/services/some-service'

@injectable()
export default class HomeController extends BaseController {

  /**
   * Route prefix for the controller.
   *
   * @var string
   */
  public prefix = '/'

  /**
   * Middleware to be applied to all routes on the controller.
   *
   * @var Array<InjectionToken>
   */
  protected middleware = ['web']

  /**
   * Inject the necessary dependencies for the controller.
   *
   * @param someService Instance of SomeService
   */
  constructor(private someService: SomeService) { super() }

  /**
   * Bind all actions to the appropriate routes.
   */
  protected mapActions(): this {

    this.router.get('/', (req, res, next) => this.index(req, res, next))

    this.router.get('/test/:id/other/:other', (req, res) => this.test(req, res))

    return this

  }

  public index(req: Request, res: Response, next: NextFunction): void {

    if (req.session.views) {

      req.session.views++

      res
        .status(200)
        .send(`Welcome back. Visit #: ${req.session.views}`)

    } else {

      this.someService.someMethod()

      req.session.views = 1

      res
        .status(200)
        .send('Hello!')

    }

    next()

  }

  public test(req: Request, res: Response): Response {

    this.someService.someMethod()

    return res.send(req.params)

  }

}
