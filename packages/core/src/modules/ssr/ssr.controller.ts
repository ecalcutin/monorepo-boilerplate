import { Controller, Get, Inject } from '@nestjs/common';
import { SSRService } from './ssr.service';

@Controller()
export class SSRController {
  constructor(
    @Inject(SSRService)
    private readonly ssrService: SSRService,
  ) {}

  @Get('/')
  renderSSR() {
    return this.ssrService.render();
  }
}
