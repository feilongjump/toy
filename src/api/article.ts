import Request from '@/utils/request'

export default class Auth {
  BASE_URL = 'articles'

  public index(params: object) {
    const url = `${this.BASE_URL}`
    return Request.get(url, params)
  }

  public show(id: string | string[]) {
    const url = `${this.BASE_URL}/${id}`
    return Request.get(url)
  }

  public store(params: {}) {
    return Request.post(this.BASE_URL, params)
  }

  public update(id: any, params: {}) {
    const url = `${this.BASE_URL}/${id}`

    return Request.patch(url, params)
  }
}
