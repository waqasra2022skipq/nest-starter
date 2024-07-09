import { NestFactory } from '@nestjs/core';
import { CatModule } from './cats/cat.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(CatModule); 
  await app.listen(3000);
}
bootstrap();
