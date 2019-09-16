import morgan from 'morgan'
import { logger } from '../helpers'

export default morgan('tiny', {
  stream: {
    write: function (message: string): void {
      logger.info(message.trim())
    }
  }
})
