import { Get, Injectable } from '@nestjs/common'

@Injectable()
export class DevService {
  @Get()
  getHello(): string {
    return 'Hello World!' + ' dev'
  }
}
