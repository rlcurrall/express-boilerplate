import { container } from 'tsyringe'
import ConfigManager from 'lib/foundation/config.manager'

container.register(ConfigManager, { useClass: ConfigManager })
