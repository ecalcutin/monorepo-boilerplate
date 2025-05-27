import path from 'node:path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { SSRModule } from '../ssr';

import { AppController } from './app.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'build'),
    }),
    SSRModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
