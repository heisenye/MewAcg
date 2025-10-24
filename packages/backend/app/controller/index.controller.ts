import { Context } from 'koa'

class IndexController {
  public index(ctx: Context) {
    ctx.body = 'Hello World'
  }
}

export default new IndexController()
