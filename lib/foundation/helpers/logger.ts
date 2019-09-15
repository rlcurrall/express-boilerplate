import winstonDailyRotateFile from 'winston-daily-rotate-file'
import { createLogger, transports, format, Logger } from 'winston'
import { getPublicIp } from './os'
import { config } from './file'


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

const { combine, timestamp, printf, align } = format
const { Console } = transports

export const logger: Logger = createLogger({

  exitOnError: false,

  format: combine(
    timestamp(),
    align(),
    printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${label || 'App'}] ${level}: ${message}`
    })
  ),

  transports: [
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
      filename: 'temp/logs/%DATE%-info.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
    new Console()
  ]

})

// export default logger
