import { RequestHandler } from 'express'

export interface RouteDefinition {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'options';
  handler: string;
}

export type Middleware = RequestHandler | RequestHandler[]

type Abstract<T> = Function & {prototype: T};
type Constructor<T> = new (...args: any[]) => T;
export type Class<T> = Abstract<T> | Constructor<T>;
