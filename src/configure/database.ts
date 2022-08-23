import { Db } from '../types/config'

export default (): Db => {
  return {
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: 'rootroot',
  }
}
