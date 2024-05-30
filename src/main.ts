import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT_APP = process.env.PORT_SERVER || null;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT_APP);
  console.log(`Corriendo en el puerto ${PORT_APP}`);
}
bootstrap();
