import Router = require('@koa/router')
import indexController from '../controller/index.controller'
const router = new Router()

router.get('/', indexController.index)
export default router
