import Http from '@/plugins/Http.ts'
import { AxiosResponse } from 'axios'

export default class Todo extends Http {
  BASE_URL = 'todos'

  public index(): Promise<AxiosResponse> {
    return this.Http.get(this.BASE_URL)
  }

  public store(params: {}): Promise<AxiosResponse> {
    return this.Http.post(this.BASE_URL, params)
  }
}
