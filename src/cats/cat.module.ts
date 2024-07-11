import { Global, Module, MiddlewareConsumer, NestModule, RequestMethod} from '@nestjs/common';
import { LoggerMiddleWare } from 'src/middlewares/logger.middleware';
import { LoggerMiddleWare2 } from 'src/middlewares/logger.middleware2';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Global() //This will make this module Global meaning it will be available everywhere
@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleWare).forRoutes('cats')
    // consumer.apply(LoggerMiddleWare).forRoutes({path: 'cats', method: RequestMethod.GET})
    // consumer.apply(LoggerMiddleWare).forRoutes(CatsController) // Pass a Controller Class, you can pass multiple cont classes too.
    consumer.apply(LoggerMiddleWare, LoggerMiddleWare2).forRoutes(CatsController) // We can Apply multiple mwars too

  }
}
