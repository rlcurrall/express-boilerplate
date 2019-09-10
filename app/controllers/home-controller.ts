import { Request, Response } from 'express'

export default class HomeController {

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

}
