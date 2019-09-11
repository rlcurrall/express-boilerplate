import { Router } from 'express'
import { resolve } from 'lib/foundation/helpers'
import ApiController from 'app/controllers/api-controller'

const router = Router()

const apiController = resolve<ApiController>(ApiController)

router.get('/', apiController.index.bind(apiController))

router.get('/check', (req, res) => {
  res
    .status(200)
    .send('OK!')
    .end()
})

export default router
