import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

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
          console.error('这是什么情况？', error)
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
        console.error('还没登陆啊！让我来帮你跳转到登录页面吧！')
        break
      case 404:
        console.error('地址不存在！让我来帮你跳转到 404 页面吧！')
        break
      case 422:
        console.error('参数错误！让我来提醒你一下！')
        break
      default:
        console.error('出现了什么问题？要提交一下错误过来吗？')
        break
    }
  }
}
