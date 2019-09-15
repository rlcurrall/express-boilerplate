/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs'
import path from 'path'
import { singleton } from 'tsyringe'

@singleton()
export default class ConfigManager {

  private configData: any

  constructor() {

    this.configData = {}

    const configDir = path.join(process.cwd(), 'config')

    this.loadDir(configDir, [])

  }

  private loadDir(configPath: string, ids: Array<string>): void {

    const dirContents = fs.readdirSync(configPath)

    for (const e of dirContents) {

      const currDir = path.join(configPath, e)
      const stats = fs.statSync(currDir)

      if (stats.isFile()) {

        const data = require(currDir).default

        const key = e.split('.')[0]

        if (!ids.length) {

          this.configData[key] = data

          continue

        }

        let configData: any = {}
        configData[key] = data

        for (let i = ids.length - 1; i > 0; i--) {

          const id = ids[i]

          const temp: any = {}
          temp[id] = configData
          configData = temp

        }

        this.configData[ids[0]] = configData

      }

      if (stats.isDirectory()) {

        this.loadDir(currDir, [...ids, e])

      }

    }

  }

  public getConfig(ids: string): unknown {

    const idArr = ids.split('.')

    let temp = this.configData

    for (const i of idArr) {

      temp = temp[i]

    }

    return temp
  }

}
