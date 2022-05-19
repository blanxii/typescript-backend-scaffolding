import express from 'express'

import { HelloWorldController } from '../controllers/HelloWorldController'
import {IController} from "../controllers/IController"

import container from './../container'

const router = express.Router()


const dispatchController = (controller: string) => {
  const instance: IController = container.get(controller) as IController
  return instance.handle.bind(instance)
}

router.get('/hello',  dispatchController(HelloWorldController.name))


export default router
