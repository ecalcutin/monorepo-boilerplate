import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SSRModule } from '../ssr';

@Module({
  imports: [SSRModule],
  controllers: [AppController],
})
export class AppModule {}
