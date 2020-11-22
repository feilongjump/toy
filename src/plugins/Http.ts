import axios, { AxiosRequestConfig } from 'axios'

export default class Http {
  private config: AxiosRequestConfig = {
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 10000,
    headers: this.headers(),
  }

  protected Http: any

  constructor() {
    this.Http = axios.create(this.config)

    this.initHttp()
  }

  /**
   * 初始化
   */
  private initHttp() {
    console.info(this.Http.defaults)
  }

  /**
   * 请求头
   */
  private headers() {
    return {
      Authorization: this.getToken(),
    }
  }

  /**
   * 获取 Token
   */
  private getToken() {
    return 'Token'
  }
}
