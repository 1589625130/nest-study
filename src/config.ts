import path from 'path'
import { config } from 'dotenv'
import { devConfig } from './config/dev.config'
import { proConfig } from './config/pro.config'

config({ path: path.join(__dirname, '../.env') })

export const ServiceConfig = {
  provide: 'ServiceConfig',
  useValue: process.env.NODE_ENV === 'development' ? devConfig : proConfig,
}
