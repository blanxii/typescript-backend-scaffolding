import { program } from 'commander'

import container from './container'
import { HelloWorldController } from './controllers/HelloWorldController'

program.version('0.0.1')


const handle = async(commandName, ...params) => {
  const command = container.get(commandName)
  await command.handle(...params)
}

program
  .command('hello-world')
  .description('Send hello world command')
  .action(async () => {
    await handle(HelloWorldController)
  })


program.parse(process.argv)
