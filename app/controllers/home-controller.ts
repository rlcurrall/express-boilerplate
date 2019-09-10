import { Request, Response } from 'express'
import { injectable } from 'tsyringe'
import SomeClass from 'app/services/some-service'

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
      req.session.views = 1

      return res
        .status(200)
        .send('Hello!')
    }
  }

  public test(req: Request, res: Response): Response {

    this.someClass.someMethod()

    return res.status(200).send('testing...')
  }

}
