import { Router } from 'express'
import { RouteDefinition } from '../typings'

export interface IController {

  router: Router;

  registerMiddleware(): this;

  mapActions(definitions: RouteDefinition[]): this;

}

export interface Constructable<T> {
  new(): T;
}
