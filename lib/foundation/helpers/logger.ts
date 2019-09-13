import winstonDailyRotateFile from 'winston-daily-rotate-file'
import { createLogger, transports, format, Logger } from 'winston'
import { getPublicIp } from './os'
import config from 'config'


/*
|--------------------------------------------------------------------------
| Initialization Function
|--------------------------------------------------------------------------
|
| Function called when the application is booted.
|
*/

export function logStart(): void {

  console.clear()
  console.log(
    `Server started!

    Available locally at:\t<http://127.0.0.1:${config.get('app.port')}>
    Available publicly at:\t<http://${getPublicIp()}:${config.get('app.port')}>
    `
  )

  console.table([])

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
      filename: 'storage/logs/%DATE%-info.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
    new winstonDailyRotateFile({
      level: 'error',
      filename: 'storage/logs/%DATE%-info.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
    new Console()
  ]

})

// export default logger
