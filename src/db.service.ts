import { Injectable } from '@nestjs/common'

@Injectable()
export class DbService {
  constructor(private readonly options: Record<string, any>) {}

  public connect() {
    console.log({ options: this.options })
    return `<h1>θΏζ₯ζε${this.options.host}</h1>`
  }
}
