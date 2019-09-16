import { injectable } from 'tsyringe'
import { Request, Response } from 'express'
import SomeService from 'app/services/some-service'
import Controller from 'lib/foundation/routing/controller'

@injectable()
export default class ApiController extends Controller {

  public prefix = '/api'

  constructor(protected someService: SomeService) { super() }

  protected mapActions(): this {

    this.router.get('/', (req, res) => this.index(req,res))

    return this

  }

  public index(req: Request, res: Response): Response {

    this.someService.someMethod()

    res.write('Hello from the api!')

    return res.send()

  }

}
