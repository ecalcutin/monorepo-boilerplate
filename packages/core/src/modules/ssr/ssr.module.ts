import { Module } from '@nestjs/common';

import { SSRController } from './ssr.controller';
import { SSRService } from './ssr.service';

@Module({
  imports: [],
  controllers: [SSRController],
  providers: [SSRService],
})
export class SSRModule {}
