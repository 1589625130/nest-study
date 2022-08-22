import { Controller, Get, Inject } from '@nestjs/common'
import { AppService } from './app.service'
import { DbService } from './db.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly dbService: DbService,
    @Inject('DbService')
    private readonly dbService: DbService,
    @Inject('DbMysql')
    private readonly dbMysql: string,
  ) {}

  @Get('mysql')
  getMysql(): string {
    return this.dbMysql
  }

  @Get('connect')
  connectMysql(): string {
    return this.dbService.connect()
  }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
