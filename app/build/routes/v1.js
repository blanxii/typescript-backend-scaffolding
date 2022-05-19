import express from 'express';
import { HelloWorldController } from '../controllers/HelloWorldController';
import container from './../container';
const router = express.Router();
const dispatchController = (controller) => {
    const instance = container.get(controller);
    return instance.handle.bind(instance);
};
router.get('/hello', dispatchController(HelloWorldController.name));
export default router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3YxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQTtBQUU3QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQTtBQUcxRSxPQUFPLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQTtBQUV0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFHL0IsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLFVBQWtCLEVBQUUsRUFBRTtJQUNoRCxNQUFNLFFBQVEsR0FBZ0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQWdCLENBQUE7SUFDdEUsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUN2QyxDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBR3BFLGVBQWUsTUFBTSxDQUFBIn0=