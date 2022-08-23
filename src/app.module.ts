import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UserModule } from './user/user.module'
import { AppService } from './app.service'
import { ServiceConfig } from './config'
import { DbService } from './db.service'
import { HdModule } from './hd/hd.module'
import { TestModule } from './test/test.module'
import { ConfigModule } from './config/config.module'
import { ArticleModule } from './article/article.module';

@Module({
  imports: [UserModule, HdModule, TestModule, ConfigModule, ArticleModule],
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
