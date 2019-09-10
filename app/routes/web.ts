// import csurf from 'csurf'
import { Router } from 'express'
import { injectable } from 'tsyringe'
import session from 'lib/foundation/middleware/session'
import HomeController from 'app/controllers/home-controller'
import SomeClass from 'app/services/some-service'
import IRouter from 'lib/foundation/router/interface'

@injectable()
export default class WebRouter implements IRouter {

  public router: Router = Router()

  constructor(private homeController: HomeController, private someClass: SomeClass) { }

  public register(): WebRouter {

    this.router.use(session)

    this.router.get('/', this.homeController.index)

    this.router.get('/test', this.homeController.test)

    return this

  }

  public getRouter(): Router {

    this.someClass.someMethod()

    return this.router

  }

}
