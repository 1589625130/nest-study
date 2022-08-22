import { Get, Inject, Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  constructor(
    @Inject('ServiceConfig')
    private readonly serviceConfig: Record<string, any>,
  ) {}

  @Get()
  getHello(): string {
    return 'Hello World!' + this.serviceConfig.host
  }
}
