import axios from 'axios'
import { Message } from 'element-ui'
import { isEmpty } from 'lodash'
import locaforage from 'localforage'

const serve = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000
})

serve.interceptors.request.use(
  config => {
    if (isEmpty(config.headers.common.Authorization)) {
      locaforage.getItem('token')
        .then(token => {
          if (!isEmpty(token)) {
            setHeaderToken(token)
          }
        })
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

serve.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (!error['response']) {
      return Promise.reject(error)
    }

    switch (error.response.status) {
      case 401:
        Message.error(error.response.data.message)
        if (window.location.pathname !== '/backstage/auth') {
          window.location.href = '/backstage/auth'
        }
        break;
      case 422: {
        let data = error.response.data.errors
        let content = ''

        Object.keys(data).map(function (key) {
          let value = data[key]

          content = value[0]
        })

        Message.error(content)
        break;
      }
      default:
        Message.error('啥？乱七八糟的东西！')
        break;
    }

    return Promise.reject(error.response)
  }
)

export const setHeaderToken = token => {
  serve.defaults.headers.common.Authorization = `Bearer ${token}`
}

export default serve
