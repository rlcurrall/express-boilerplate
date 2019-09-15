import { container } from 'tsyringe'
import ConfigManager from 'lib/foundation/config'

container.register(ConfigManager, { useClass: ConfigManager })
