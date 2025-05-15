import { Injectable } from '@nestjs/common';
import render from './utils/render';

@Injectable()
export class SSRService {
  constructor() {}

  public render() {
    return render();
  }
}
