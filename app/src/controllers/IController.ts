import {Request, Response} from "express"

export interface IController {
  readonly handle: (request: Request, response: Response) => Promise<void>
}
