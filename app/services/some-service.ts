import logger from 'lib/foundation/helpers/logger'

export default class SomeClass {

  private message: string

  constructor() {
    this.message = 'Hello World!'
  }

  public someMethod(): void {
    logger.info(this.message, { label: 'SomeClass' })
  }
}
