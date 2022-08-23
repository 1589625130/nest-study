import { DynamicModule, Global, Module } from '@nestjs/common'
import { ConfigService } from './config.service'

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {
  static forRoot(options: { path: string }): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        // {
        //   provide: ConfigService,
        //   useFactory() {
        //     return new ConfigService(options)
        //   },
        // },
        {
          provide: 'OPTIONS',
          useValue: options,
        },
      ],
      exports: [ConfigService],
    }
  }
}
