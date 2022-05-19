import { Request, Response } from "express";
import { IController } from "./IController";
export declare class HelloWorldController implements IController {
    handle(_request: Request, response: Response): Promise<void>;
}
