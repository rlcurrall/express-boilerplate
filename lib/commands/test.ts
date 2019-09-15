import { config as dotenv } from 'dotenv'
dotenv()
import { config } from '../foundation/helpers'
// import ConfigManager from '../foundation/config'


console.log(config('app.env'))

// const configManager = new ConfigManager()

// console.log(configManager.getConfig('app.env'))

// const test = config('db.test')
// console.log(typeof test, test)
