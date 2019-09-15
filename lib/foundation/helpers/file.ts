/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs'
import path from 'path'

export function config(key: string): unknown {

  let configPath = path.join(process.cwd(), 'config')
  let keys: string[]

  const keyArr = key.split('.')

  for (const i in keyArr) {
    const val = keyArr[i]
    const dir = path.join(configPath, val)
    const file = path.join(configPath, `${val}.ts`)

    if (fs.existsSync(dir)) {
      // handle dir
      configPath = dir
      continue
    }

    if (fs.existsSync(file)) {
      // handle file
      configPath = file
      keys = keyArr.slice(parseInt(i) + 1)
      break
    }

    // handle error
    throw new ReferenceError(`No file or directory named '${val}' found in '${configPath}'.`)

  }

  const config = require(configPath).default
  let res = config

  for (const k of keys) {

    res = res[k]

  }

  return res

}
