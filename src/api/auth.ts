import Request from '@/utils/request'

export default class Auth {
  BASE_URL = ''

  public login(params: object) {
    const url = `${this.BASE_URL}/login`
    return Request.post(url, params)
  }

  public register(params: object) {
    const url = `${this.BASE_URL}/register`
    return Request.post(url, params)
  }
}
