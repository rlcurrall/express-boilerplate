import crypto from 'crypto'

export async function generateKey(): Promise<string> {

  let token: string

  await crypto.randomBytes(48, (err, buffer) => token = buffer.toString('hex'))

  return token

}
