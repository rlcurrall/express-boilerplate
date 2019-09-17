import { EventEmitter } from 'events'
import { injectable } from 'tsyringe'
import BaseController from 'lib/foundation/routing/controller'
import { Request, Response, NextFunction } from 'express'

import SomeService from 'app/services/some-service'
import { Controller, Get } from 'lib/foundation/routing/decorators'

@injectable()
@Controller('/')
export default class HomeController extends BaseController {

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
  constructor(private someService: SomeService, private eventEmitter: EventEmitter) { super() }

  @Get('/')
  public index(req: Request, res: Response, next: NextFunction): void {

    if (req.session.views) {

      req.session.views++

      res
        .status(200)
        .write(`Welcome back. Visit #: ${req.session.views}`)

    } else {

      this.someService.someMethod()

      req.session.views = 1

      res
        .status(200)
        .write('Hello!')

    }

    next()

  }

  @Get('/test')
  public testTemplate(req: Request, res: Response, next: NextFunction): void {

    res.render('test', { name: 'Robb' })

    this.eventEmitter.emit('someEvent')

    next()

  }

  @Get('/test/:test/other/:other')
  public test(req: Request, res: Response, next: NextFunction): void {

    this.someService.someMethod()

    res.json(req.params)

    next()

  }

}
