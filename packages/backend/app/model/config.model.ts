import { Schema, model } from 'mongoose'
import config from '../constants/config'

export interface IConfig extends Document {
  info: {
    section: string
    content: string
    description?: string
  }[]
  footerText: string
  footerLink?: string
  footerEmail: string
}

const ConfigSchema = new Schema({
  info: [
    {
      section: { type: String, required: true },
      content: { type: String, required: true },
      description: String
    }
  ],
  footerText: String,
  footerLink: String,
  footerEmail: String
})

const System = model<IConfig>('Config', ConfigSchema, 'config')

export async function initializeConfig() {
  const system = await System.findOne()
  if (!system) {
    await System.create(config)
  }
}

export default System
