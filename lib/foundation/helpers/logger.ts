import stream from 'stream'
import winstonDailyRotateFile from 'winston-daily-rotate-file'
import { createLogger, transports, format, Logger } from 'winston'

const { combine, timestamp, printf, align } = format
const { Console } = transports

const logger: Logger = createLogger({

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

logger.stream = (): stream.Duplex => new stream.Duplex({
  write: (message: string): void => {
    logger.info(message)
  }
})

export default logger
