import { injectable } from 'tsyringe'
import { Request, Response, Router } from 'express'
import SomeClass from 'app/services/some-service'
import { IController } from 'lib/foundation/interfaces'

@injectable()
export default class ApiController implements IController {

  public prefix = '/api'

  public router: Router = Router()

  constructor(private someClass: SomeClass) {

    this.router.get('/', this.index.bind(this))

  }

  public index(req: Request, res: Response): Response {

    this.someClass.someMethod()

    return res.send('Hello from the api!')

  }

}
