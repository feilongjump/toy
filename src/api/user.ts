import Request from '@/utils/request'

export default class Auth {
  BASE_URL = ''

  public me() {
    const url = `${this.BASE_URL}/me`
    return Request.get(url)
  }
}
