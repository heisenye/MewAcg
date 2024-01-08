import Config, { IConfig } from '../model/config.model'
import Response from '../utils/response'
import { Context } from 'koa'

class ConfigController {
  async getConfig(ctx: Context) {
    const config = (await Config.findOne()) as IConfig
    ctx.body = Response.Success({ data: config })
  }
}

export default new ConfigController()
