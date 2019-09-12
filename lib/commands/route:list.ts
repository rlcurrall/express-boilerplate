import AppFactory from 'app/app-factory'

const app = new AppFactory().boot().app

const routes: any[] = []

function split (thing: any): any {
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

function registerRoute (path: any, layer: any): void {
  if (layer.route) {
    layer.route.stack.forEach(registerRoute.bind(null, path.concat(split(layer.route.path))))
  } else if (layer.name === 'router' && layer.handle.stack) {
    layer.handle.stack.forEach(registerRoute.bind(null, path.concat(split(layer.regexp))))
  } else if (layer.method && layer.name !== 'middleware') {
    const routeData = {
      method: layer.method.toUpperCase(),
      path: '/' + path.concat(split(layer.regexp)).filter(Boolean).join('/')
    }
    routes.push(routeData)
  }
}

function printRoutes(routes: any[]): void {
  const lines = []
  let max = 0
  for (const r of routes) {
    const msg = `| ${r.method}\t| ${r.path}`
    lines.push(msg)
    if (msg.length > max) max = msg.length
  }

  max += 4

  // console.log('-'.repeat(max))
  // const header = '| Method\t|'
  // console.log(`${header}${' '.repeat(max - header.length - 4)} |`)
  console.log('-'.repeat(max))
  for (const l of lines) {
    console.log(`${l}${' '.repeat(max - l.length - 4)} |`)
    console.log('-'.repeat(max))
  }
}

app._router.stack.forEach(registerRoute.bind(null, []))

printRoutes(routes)
