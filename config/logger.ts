import { format, transports } from 'winston'
const { timestamp, printf, align } = format

/*
|--------------------------------------------------------------------------
| Logger Configuration
|--------------------------------------------------------------------------
|
| The default logger used by the application.
|
*/
export default {

  /*
  |--------------------------------------------------------------------------
  | Logger Formats
  |--------------------------------------------------------------------------
  |
  | Here you can define the output format for the logger.
  |
  */
  formats: [
    timestamp(),
    align(),
    printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${label || 'App'}] ${level}: ${message}`
    })
  ],

  /*
  |--------------------------------------------------------------------------
  | Logger Transports
  |--------------------------------------------------------------------------
  |
  | Here you can define any custom or third party transports. By default the
  | logger has two daily rotate file transports, one that outputs the error
  | log to `<ROOT_DIR>/temp/logs/<DATE>-error.log`, and one that outputs info
  | logs to `<ROOT_DIR>/temp/logs/<DATE>-info.log`.
  |
  */
  transports: [
    new transports.Console()
  ]

}
