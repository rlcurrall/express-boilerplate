import { generateKey } from 'lib/foundation/helpers'
import fs from 'fs'

const file = fs.readFileSync('.env').toString()
const regex = /\nAPP_KEY=.*\n/
const newKey = `\nAPP_KEY=${generateKey()}\n`

if (regex.test(file)) {

  const output = file.replace(regex, newKey)

  fs.writeFileSync('.env', output)

} else {

  fs.appendFileSync('.env', newKey)

}
