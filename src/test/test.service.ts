import { Injectable } from '@nestjs/common'

@Injectable()
export class TestService {
  getTest(): string {
    return 'test service get method'
  }
}
