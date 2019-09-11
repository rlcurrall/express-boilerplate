import { Router } from 'express'

export interface Dictionary {
  [key: string]: string;
}

interface RouteConfig {

  path: string;

  handler: string;

}

export interface IController {

  prefix: string;

  router: Router;

}
