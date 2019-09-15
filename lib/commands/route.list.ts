/* eslint-disable @typescript-eslint/no-var-requires */
require(`${process.cwd()}/app/providers/middleware.provider`)
const AppFactory = require(`${process.cwd()}/app/server`).default

const routes: any[] = []

function split(thing: any): any {
  if (typeof thing === 'string') {
    return thing.split('/')
  } else if (thing.fast_slash) {
    return ''
  } else {
    const match = thing.toString()
      .replace('\\/?', '')
      .replace('(?=\\/|$)', '$')
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\/]|[^.*+?^${}()|[\]\\/])*)\$\//)
    return match
      ? match[1].replace(/\\(.)/g, '$1').split('/')
      : '<complex:' + thing.toString() + '>'
  }
}

function registerRoute(path: any[], layer: any): void {
  if (layer.route) {
    layer.route.stack.forEach(registerRoute.bind(null, path.concat(split(layer.route.path))))
  } else if (layer.name === 'router' && layer.handle.stack) {
    layer.handle.stack.forEach(registerRoute.bind(null, path.concat(split(layer.regexp))))
  } else if (layer.method) {
    const routeData = {
      method: layer.method.toUpperCase(),
      path: '/' + path.concat(split(layer.regexp)).filter(Boolean).join('/')
    }
    routes.push(routeData)
  }
}

const server = new AppFactory().boot()

const app = server.app
app._router.stack.forEach(registerRoute.bind(null, []))
console.table(routes, ['method', 'path'])
