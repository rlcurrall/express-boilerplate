import { RouteDefinition } from '../typings'

export const Controller = (newPrefix = ''): any => {

  console.log('Defining prefix: ', newPrefix)

  return function classDecorator<T extends { new(...args: any[]): {}}>(constructor: T): T {

    return class extends constructor {
      prefix = newPrefix
      constructor(...args: any[]) {
        super(...args)
      }
    }

  }

  // return (target: any): any => {
  //   Reflect.defineMetadata('prefix', newPrefix, target)

  //   // Since routes are set by our methods this should almost never be true (except the controller has no methods)
  //   if (! Reflect.hasMetadata('routes', target)) {
  //     Reflect.defineMetadata('routes', [], target)
  //   }
  // }

}

export const Get = (path: string): MethodDecorator => {
  return (target: any, propertyKey: string): void => {

    console.log('testing', target.routes)

    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor)
    }

    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>

    routes.push({
      path,
      method: 'get',
      handler: propertyKey
    })
    Reflect.defineMetadata('routes', routes, target.constructor)
  }
}
