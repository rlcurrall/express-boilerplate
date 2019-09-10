import { injectable } from 'tsyringe'
import { Request, Response } from 'express'
import SomeClass from 'app/services/some-service'
import { validationResult } from 'express-validator'

@injectable()
export default class HomeController {

  constructor(private someClass: SomeClass) { }

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

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.send(errors)
    }

    return res.send(req.params)

  }

}
