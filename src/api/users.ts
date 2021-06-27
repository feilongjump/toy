import Request from '@/utils/request'

export default class Users {
  BASE_URL = 'users'

  public index(params = {}) {
    const url = `${this.BASE_URL}`
    return Request.get(url, params)
  }
}
