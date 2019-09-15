import { config } from './file'
import { getPublicIp } from './os'
import { Format } from 'logform'
import TransportStream from 'winston-transport'
import { createLogger, format, Logger } from 'winston'
import winstonDailyRotateFile from 'winston-daily-rotate-file'


/*
|--------------------------------------------------------------------------
| Initialization Function
|--------------------------------------------------------------------------
|
| Function called when the application is booted.
|
*/

function printLine(): void {
  console.log('\n', '—'.repeat(process.stdout.columns - 2), '\n')
}

export function logStart(): void {

  console.clear()

  printLine()

  console.log(`\tServer started!

    \tAvailable locally at:\t<http://127.0.0.1:${config('app.port')}>
    \tAvailable publicly at:\t<http://${getPublicIp()}:${config('app.port')}>`
  )

  printLine()

}

/*
|--------------------------------------------------------------------------
| Application Logger
|--------------------------------------------------------------------------
|
| The default logger used by the application.
|
*/

const formats = config('logger.formats') as Format[]

const appTransports = [
  new winstonDailyRotateFile({
    level: 'info',
    filename: 'temp/logs/%DATE%-info.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
  }),
  new winstonDailyRotateFile({
    level: 'error',
    filename: 'temp/logs/%DATE%-error.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
  }),
  ...config('logger.transports') as TransportStream[]
]

export const logger: Logger = createLogger({

  exitOnError: false,

  format: format.combine(...formats),

  transports: appTransports

})

export default logger
