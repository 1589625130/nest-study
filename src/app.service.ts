import { Get, Injectable } from '@nestjs/common'
import { ConfigService } from './config/config.service'

@Injectable()
export class AppService {
  constructor(private readonly serviceConfig: ConfigService) {}

  @Get()
  getHello(): any {
    return this.serviceConfig.get('app.name')
  }
}
