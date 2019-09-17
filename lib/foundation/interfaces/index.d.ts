import { Router } from 'express'

export interface IController {

  prefix: string;

  router: Router;

}

export interface Constructable<T> {
  new(): T;
}
