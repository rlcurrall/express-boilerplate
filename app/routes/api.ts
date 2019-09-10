import { Router } from 'express'
import { injectable } from 'tsyringe'
import IRouter from 'lib/foundation/router/interface'

@injectable()
export default class ApiRouter implements IRouter {

  private router: Router = Router()

  public register(): ApiRouter {

    this.router.get('/', (req, res) => {
      res.status(200)
        .send('Hello, from the api!')
        .end()
    })

    return this

  }

  public getRouter(): Router {

    return this.router

  }

}
