import { container } from 'tsyringe'
import HomeController from 'app/controllers/home-controller'
import SomeService from 'app/services/some-service'
import ApiController from 'app/controllers/api-controller'

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
  .register<ApiController>(ApiController, { useClass: ApiController })
  .register<HomeController>(HomeController, { useClass: HomeController })
  .register<SomeService>(SomeService, { useClass: SomeService })
