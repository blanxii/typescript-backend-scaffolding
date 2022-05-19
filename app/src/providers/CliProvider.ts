import container from 'simple-di'

import { HelloWorldCli } from '../cli/HelloWorldCli'

container.register('HelloWorldCli', () => new HelloWorldCli())
