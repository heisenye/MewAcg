import dotenv = require('dotenv')
dotenv.config()
import run from './app/app'
import connect from './app/mongoose'

async function main() {
  await connect()
  run(888)
}

main()
