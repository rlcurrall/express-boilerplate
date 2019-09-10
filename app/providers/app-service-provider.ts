import { container } from 'tsyringe'
import WebRouter from 'app/routes/web'
import ApiRouter from 'app/routes/api'
import SomeClass from 'app/services/some-service'
import HomeController from 'app/controllers/home-controller'

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
  .register<SomeClass>(SomeClass, { useClass: SomeClass })
  .register<HomeController>(HomeController, { useClass: HomeController })
  .register<WebRouter>('App/Routes/WebRouter', { useClass: WebRouter })
  .register<ApiRouter>('App/Routes/ApiRouter', { useClass: ApiRouter })
