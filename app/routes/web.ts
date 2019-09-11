import csurf from 'csurf'
import { Router } from 'express'
import { resolve } from 'lib/foundation/helpers'
import session from 'lib/foundation/middleware/session'
import HomeController from 'app/controllers/home-controller'
import { param } from 'express-validator'

const router = Router()

/*
|--------------------------------------------------------------------------
| Resolve Necessary Controllers
|--------------------------------------------------------------------------
|
| Register the session middleware for web routes.
|
*/

const homeController = resolve<HomeController>(HomeController)

/*
|--------------------------------------------------------------------------
| Register Middleware
|--------------------------------------------------------------------------
|
| Register the session middleware for web routes.
|
*/

router.use(csurf({ cookie: true }))

router.use(session)

/*
|--------------------------------------------------------------------------
| Map Routes
|--------------------------------------------------------------------------
|
| Map all routes to the appropriate controller functions.
|
*/

router.get('/', (req, res) => homeController.index(req, res))

router.get(
  '/test/:id/other/:other',
  [
    param('id').isNumeric().withMessage('The `id` pram must be numeric.'),
    param('other').isAlpha().withMessage('The `other` param must be alphabetic.')
  ],
  homeController.test.bind(homeController)
)

export default router
