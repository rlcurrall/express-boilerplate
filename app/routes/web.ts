// import csurf from 'csurf'
import { Router } from 'express'
import { injectable } from 'tsyringe'
import session from '@lib/foundation/middleware/session'
import HomeController from '@app/controllers/home-controller'
import SomeClass from '@app/services/some-service'


@injectable()
export default class WebRouter {

  private router: Router

  constructor(private homeController: HomeController, private someClass: SomeClass) {

    this.router = Router()

    this.register()

  }

  public register(): void {

    this.router.use(session)

    this.router.get('/', this.homeController.index)

  }

  public getRouter(): Router {

    this.someClass.someMethod()

    return this.router

  }

}

// const router = Router()
/*
|--------------------------------------------------------------------------
| Register Middleware
|--------------------------------------------------------------------------
|
| Register the session middleware for web routes.
|
*/

// router.use(csurf({ cookie: true }))

// router.use(session)

/*
|--------------------------------------------------------------------------
| Map Routes
|--------------------------------------------------------------------------
|
| Map all routes to the appropriate controller functions.
|
*/

// router.get('/', HomeController.index)

// export default router
