import { Router } from 'express'

export interface IController {

  prefix: string;

  router: Router;

}
