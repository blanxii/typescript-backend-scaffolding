import container from 'simple-di'

import { HelloWorldController } from '../controllers/HelloWorldController'

container.register(HelloWorldController.name, () => new HelloWorldController())
