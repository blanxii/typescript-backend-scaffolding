import { program } from 'commander';
import container from './container';
import { HelloWorldController } from './controllers/HelloWorldController';
program.version('0.0.1');
const handle = async (commandName, ...params) => {
    const command = container.get(commandName);
    await command.handle(...params);
};
program
    .command('hello-world')
    .description('Send hello world command')
    .action(async () => {
    await handle(HelloWorldController);
});
program.parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBRW5DLE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQTtBQUNuQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQTtBQUV6RSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBR3hCLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLEVBQUUsRUFBRTtJQUM3QyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzFDLE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQTtBQUVELE9BQU87S0FDSixPQUFPLENBQUMsYUFBYSxDQUFDO0tBQ3RCLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQztLQUN2QyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDakIsTUFBTSxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtBQUNwQyxDQUFDLENBQUMsQ0FBQTtBQUdKLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBIn0=