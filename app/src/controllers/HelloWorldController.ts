import {Request, Response} from "express"

import {IController} from "./IController"

export class HelloWorldController implements IController {
  async handle(_request: Request, response: Response): Promise<void> {

    response.json({test: 'hello-world 3'})
  }
}
