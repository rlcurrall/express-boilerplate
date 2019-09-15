import crypto from 'crypto'

export function generateKey(): string {

  const key = crypto.randomFillSync(Buffer.alloc(36)).toString('hex')

  return key

}
