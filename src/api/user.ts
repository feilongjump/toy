import Request from '@/utils/request'

export default class Auth {
  BASE_URL = 'users'

  public me() {
    const url = `me`
    return Request.get(url)
  }

  public sendActiveMail() {
    const url = `user/send-active-mail`
    return Request.post(url)
  }
}
