import { logger } from 'lib/foundation/helpers'

export default class SomeService {

  private message: string

  constructor() {
    this.message = 'Hello World!'
  }

  public someMethod(): void {
    logger.info(this.message, { label: 'SomeService' })
  }

}
