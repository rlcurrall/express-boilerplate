import { config as dotenv } from 'dotenv'
import { config } from 'lib/foundation/helpers/file'

dotenv()

const test = config('db.test')
console.log(typeof test, test)
