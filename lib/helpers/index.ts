import config from 'config'
import { Logger } from 'winston'
import logger from './logger'

/**
 * @name env
 * @description Get the value of an environment variable. Has an optional
 * second parameter which defines the default value if the environment variable
 * is not set.
 *
 * @param key Key of the desired environment variable.
 * @param defaultValue Default value to be returned if value is undefined.
 */
export function env(key: string, defaultValue?: any): any {
  return process.env[key] || defaultValue
}

const _global = global as any

declare global {
  const logger: Logger
  const config: config.IConfig

  /**
   * @name env
   * @description Get the value of an environment variable. Has an optional
   * second parameter which defines the default value if the environment variable
   * is not set.
   *
   * @param key Key of the desired environment variable.
   * @param defaultValue Default value to be returned if value is undefined.
   */
  function env(key: string, defaultValue?: any): any
}

_global.logger = logger
_global.config = config
_global.env = env
