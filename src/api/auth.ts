import Http from '@/plugins/Http.ts'

export default class Auth extends Http {
  BASE_URL = 'auth'

  public login(params: {}) {
    const url = `${this.BASE_URL}/login`
    return this.Http.post(url, params)
  }

  public me() {
    const url = 'me'
    return this.Http.get(url)
  }
}
