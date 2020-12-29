import router from '@/router'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import Message from './Message'

export default class Http {
  private config: AxiosRequestConfig = {
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 10000,
    headers: this.headers(),
  }

  protected Http: any

  constructor() {
    this.Http = axios.create(this.config)

    this.initHttpResponse()
  }

  /**
   * 初始化响应拦截器
   */
  private initHttpResponse() {
    this.Http.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data
      },
      (error: AxiosError) => {
        const { response } = error

        if (response) {
          this.responseError(response)
        } else {
          Message(`网络好像飞去外星球了！`)
        }
      },
    )
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
    let token = ''
    if (localStorage.getItem('token_type') && localStorage.getItem('token')) {
      token =
        localStorage.getItem('token_type') + ' ' + localStorage.getItem('token')
    }

    return token
  }

  /**
   * 请求失败的错误
   *
   * @param response 响应数据
   */
  private responseError(response: AxiosResponse) {
    switch (response.status) {
      case 401:
        Message('先登录一下吧。')
        router.push({ name: 'Auth.Login' })
        break
      case 404:
        Message('没找到你想要的东西！')
        router.push({ name: 'NotFound' })
        break
      case 422:
        Message('参数错误了，让我来提醒你一下！')
        break
      default:
        Message('发生了什么？过段时间再来提交错误吧')
        break
    }
  }
}
