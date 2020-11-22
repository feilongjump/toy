import Http from '@/plugins/Http.ts'
import { AxiosResponse } from 'axios'

export default class Articles extends Http {
  public index(): Promise<AxiosResponse> {
    return this.Http.get('articles')
  }
}
