import csurf from 'csurf'
import { injectable } from 'tsyringe'
import SomeClass from 'app/services/some-service'
import { Request, Response, Router } from 'express'
import session from 'lib/foundation/middleware/session'
import { IController } from 'lib/foundation/interfaces'
import { validationResult, param } from 'express-validator'

@injectable()
export default class HomeController implements IController {

  public prefix = '/'

  public router: Router = Router()

  constructor(private someClass: SomeClass) {

    this.router.use(session)

    this.router.use(csurf({ cookie: true }))

    this.router.get('/', this.index.bind(this))

    this.router.get(
      '/test/:id/other/:other',
      [
        param('id').isNumeric().withMessage('The `id` pram must be numeric.'),
        param('other').isAlpha().withMessage('The `other` param must be alphabetic.')
      ],
      this.test.bind(this)
    )

  }

  public index(req: Request, res: Response): Response {

    if (req.session.views) {

      req.session.views++

      return res
        .status(200)
        .send(`Welcome back. Visit #: ${req.session.views}`)

    } else {

      this.someClass.someMethod()

      req.session.views = 1

      return res
        .status(200)
        .send('Hello!')

    }

  }

  public test(req: Request, res: Response): Response {

    this.someClass.someMethod()

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.send(errors)
    }

    return res.send(req.params)

  }

}
