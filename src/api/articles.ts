import Http from '@/plugins/Http.ts'
import { AxiosResponse } from 'axios'

export default class Articles extends Http {
  BASE_URL = 'articles'

  public index(): Promise<AxiosResponse> {
    return this.Http.get(this.BASE_URL)
  }

  public show(id: number | string | string[]): Promise<AxiosResponse> {
    const url = `${this.BASE_URL}/${id}`

    return this.Http.get(url)
  }

  public store(params: {}): Promise<AxiosResponse> {
    return this.Http.post(this.BASE_URL, params)
  }

  public patch(
    id: number | string | string[],
    params: {},
  ): Promise<AxiosResponse> {
    const url = `${this.BASE_URL}/${id}`

    return this.Http.patch(url, params)
  }
}
