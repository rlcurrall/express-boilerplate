import { container } from 'tsyringe'
import HomeController from 'app/controllers/home-controller'
import ApiController from 'app/controllers/api-controller'

container
  .register<ApiController>(ApiController, { useClass: ApiController })
  .register<HomeController>(HomeController, { useClass: HomeController })
