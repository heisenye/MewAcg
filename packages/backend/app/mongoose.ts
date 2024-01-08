import mongoose from 'mongoose'
import logger from './logger'
const MONGODB_URI = process.env.MONGODB_URI

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI as string)
  } catch (err) {
    logger.error(err)
  }
}

export default connect
