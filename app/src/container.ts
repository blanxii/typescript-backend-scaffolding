import dotenv from 'dotenv'
import container from 'simple-di'

dotenv.config()

container.load([
  './providers/**.**'
])

export default container
