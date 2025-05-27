import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app/app.module';

const PORT = process.env.APP_PORT || 3000;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT);
};

bootstrap()
  .catch(error => {
    // eslint-disable-next-line
    console.error(error);
    process.exit(1);
  })
  .then(() => {
    // eslint-disable-next-line
    console.log(`App listening on ${PORT}`);
  });
