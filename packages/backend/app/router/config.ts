import Router = require('@koa/router')
import configController from '../controller/config.controller'
const router = new Router({ prefix: '/api' })

router.get('/config', configController.getConfig)

export default router
