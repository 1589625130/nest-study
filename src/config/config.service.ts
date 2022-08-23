import { Injectable } from '@nestjs/common'
import path from 'path'
import { readdirSync } from 'fs'

@Injectable()
export class ConfigService {
  config = {} as any

  constructor() {
    const config = { path: path.resolve(__dirname, '../configure') }
    // 读取文件
    readdirSync(config.path).map(async (file) => {
      if (file.slice(-2) === 'js' && file.indexOf('config') === -1) {
        const module = await import(path.resolve(config.path, file))
        this.config = { ...this.config, ...module.default() }
        console.log(this.config)
      }
    })
  }

  getConfig(): string {
    return JSON.stringify(this.config)
  }

  get(path: string): any {
    return path.split('.').reduce((config, name) => config[name], this.config)
  }
}
