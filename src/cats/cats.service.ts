import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {Cat} from '../interfaces/cat.interface';
import { error } from "console";

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [{name:'puppy',age:3,breed:'German'}];

    create(cat: Cat) {
        this.cats.push(cat);
    }
    findAll(): Cat[] {
        // return this.cats;
        // throw new HttpException({status: HttpStatus.FORBIDDEN, error: "Custom Error Message"}, 
        //     HttpStatus.FORBIDDEN
        // )
        try {
            return this.cats;
        } catch(err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "Custom Error Message"
            },
            HttpStatus.FORBIDDEN,
            {
                cause: error
            }
        )
        }
    }
}