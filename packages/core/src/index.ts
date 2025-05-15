import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app/app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
};

bootstrap().catch(error => {
  console.error(error);
  process.exit(1);
});
