import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UserModule } from './user/user.module'
import { AppService } from './app.service'
import { ServiceConfig } from './config'
import { DbService } from './db.service'
import { HdModule } from './hd/hd.module'
import { TestModule } from './test/test.module'
import { ConfigModule } from './config/config.module'
import { ArticleModule } from './article/article.module'
import path from 'path'

const configPath = path.resolve(__dirname, './configure')

@Module({
  imports: [UserModule, HdModule, TestModule, ConfigModule.forRoot({ path: configPath }), ArticleModule],
  controllers: [AppController],
  providers: [
    AppService,
    ServiceConfig,
    // DbService,
    {
      provide: 'DbService',
      inject: ['ServiceConfig'],
      useFactory(ServiceConfig) {
        return new DbService(ServiceConfig)
      },
    },
    {
      provide: 'DbMysql',
      useFactory() {
        return 'mysql'
      },
    },
  ],
})
export class AppModule {}
