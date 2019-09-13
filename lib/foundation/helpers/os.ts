import os from 'os'

/**
 * @name getPublicIp
 * @description Get the public IP of the machine the server is running on.
 *
 * @returns string
 */
export function getPublicIp(): string {

  const iFaces = os.networkInterfaces()

  let address: string

  for ( const dev in iFaces) {

    const iface = iFaces[dev].filter((details) => {
      return details.family === 'IPv4' && details.internal === false
    })

    if (iface.length > 0) address = iface[0].address
  }

  return address
}
