import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleWare2 implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("In The 2nd MiddleWare");
        next();
    }

}