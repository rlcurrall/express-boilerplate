/* eslint-disable @typescript-eslint/no-var-requires */
import { container } from 'tsyringe'
import ConfigManager from '../config.manager'

export function config(key: string): unknown {

  const configManager = container.resolve(ConfigManager)

  return configManager.getConfig(key)

}
