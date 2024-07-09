import { Global, Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Global() //This will make this module Global meaning it will be available everywhere
@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatModule {}
