import { container } from 'tsyringe'
import WebRouter from '@app/routes/web'

/*
|--------------------------------------------------------------------------
| Dependency Injection Container
|--------------------------------------------------------------------------
|
| Here we are using the dependency injection container from TSyringe. All
| Classes that need to have dependencies injected should be registered
| here.
|
*/

container
  .register<WebRouter>('WebRouter', { useClass: WebRouter })
