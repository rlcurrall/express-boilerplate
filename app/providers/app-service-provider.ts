import { container } from 'tsyringe'
import HomeController from 'app/controllers/home-controller'
import SomeClass from 'app/services/some-service'

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
  .register<HomeController>(HomeController, { useClass: HomeController })
  .register<SomeClass>(SomeClass, { useClass: SomeClass })
