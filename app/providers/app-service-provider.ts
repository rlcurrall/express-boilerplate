import { container } from 'tsyringe'
import SomeService from 'app/services/some-service'

/*
|--------------------------------------------------------------------------
| Dependency Injection Container
|--------------------------------------------------------------------------
|
| Here we are using the dependency injection container from TSyringe. All
| Classes that need to have dependencies injected should be registered
| here.
|
| NOTE:
| Registering with the dependency injection container causes a performance
| hit at compile time, and when using command line utilities. This
| performance hit increases as more modules are registered. Consuming these
| modules has a negligible affect on performance, so the solution would be
| to have separate service providers that register as few modules as
| possible.
|
*/

container
  .register<SomeService>(SomeService, { useClass: SomeService })


/*
|--------------------------------------------------------------------------
| Register Other Providers
|--------------------------------------------------------------------------
|
| To mitigate the performance issue we will import all other providers
| here.
|
*/
import 'app/providers/route-service-provider'
