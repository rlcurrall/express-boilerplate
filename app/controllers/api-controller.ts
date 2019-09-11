import { injectable } from 'tsyringe'
import { Request, Response, Router } from 'express'
import SomeService from 'app/services/some-service'
import { IController } from 'lib/foundation/interfaces'

@injectable()
export default class ApiController implements IController {

  public prefix = '/api'

  public router: Router = Router()

  constructor(private someService: SomeService) {

    this.router.get('/', this.index.bind(this))

  }

  public index(req: Request, res: Response): Response {

    this.someService.someMethod()

    return res.send('Hello from the api!')

  }

}
