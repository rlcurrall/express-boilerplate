import { injectable } from 'tsyringe'
import { Request, Response } from 'express'
import SomeService from 'app/services/some-service'
import BaseController from 'lib/foundation/routing/controller'
import { Controller, Get } from 'lib/foundation/routing/decorators'

@injectable()
@Controller('/api')
export default class ApiController extends BaseController {

  constructor(protected someService: SomeService) { super() }

  @Get('/')
  public index(req: Request, res: Response): Response {

    this.someService.someMethod()

    res.write('Hello from the api!')

    return res.send()

  }

}
