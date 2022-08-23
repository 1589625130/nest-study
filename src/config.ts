import path from 'path'
import { config } from 'dotenv'
import { devConfig } from './configure/dev.config'
import { proConfig } from './configure/pro.config'

config({ path: path.join(__dirname, '../.env') })

export const ServiceConfig = {
  provide: 'ServiceConfig',
  useValue: process.env.NODE_ENV === 'development' ? devConfig : proConfig,
}
