import path from 'node:path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SSRModule } from '../ssr';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'build'),
    }),
    SSRModule,
  ],
})
export class AppModule {}
