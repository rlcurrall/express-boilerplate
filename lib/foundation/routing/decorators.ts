import { RouteDefinition } from '../typings'

export const Controller = (newPrefix = ''): any => {

  return (target: any): any => {
    Reflect.defineMetadata('prefix', newPrefix, target)

    // Since routes are set by our methods this should almost never be true (except the controller has no methods)
    if (! Reflect.hasMetadata('routes', target)) {
      Reflect.defineMetadata('routes', [], target)
    }
  }

}

export const Get = (path: string): MethodDecorator => {
  return (target: any, propertyKey: string): void => {

    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor)
    }

    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>

    routes.push({
      path,
      method: 'get',
      handler: target[propertyKey]
    })
    Reflect.defineMetadata('routes', routes, target.constructor)
  }
}
