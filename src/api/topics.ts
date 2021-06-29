import Request from '@/utils/request'

export default class Topics {
  BASE_URL = 'topics'

  public index(params = {}) {
    return Request.get(this.BASE_URL, params)
  }

  public show(id: any) {
    const url = `${this.BASE_URL}/${id}`

    return Request.get(url)
  }

  public store(params: {}) {
    return Request.post(this.BASE_URL, params)
  }

  public patch(id: any, params: {}) {
    const url = `${this.BASE_URL}/${id}`

    return Request.patch(url, params)
  }
}
