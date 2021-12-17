import { ElNotification, ElMessage } from 'element-plus'
import { RouteLocationNormalized } from 'vue-router'
import User from '@/api/user'
import router from '.'

/**
 * 发送激活邮件
 */
const sendActiveMail = () => {
  ElNotification.closeAll()

  const token = localStorage.getItem('token')
  let user = <any>localStorage.getItem('user')

  if (!token || !user) {
    ElMessage.warning('请您先登录!')

    router.push({ name: 'Login' })
  }

  user = JSON.parse(user)
  if (user.is_activated) {
    ElNotification({
      message: '此账号已激活成功，请勿重复激活!',
      type: 'warning'
    })
    return
  }

  new User().sendActiveMail().then(() => {
    ElMessage.success('已发送激活邮件到您的邮箱，请注意查收!')
  })
}

/**
 * 全局后置钩子 - 获取注册信息提醒
 *
 * @param to
 * @returns
 */
const registerAfter = (to: RouteLocationNormalized) => {
  const { query } = to

  if (query.type !== 'register') return

  let message = '发生了什么!🙁'
  let notificationType = <'success' | 'error' | 'warning'>'error'
  let customClass = ''
  let clickFunc = () => {}

  if (query['active-success'] === 'yes') {
    message = '激活成功 🎉'
    notificationType = 'success'
  } else {
    switch (query.error) {
      case 'overtime':
        message =
          '激活链接已失效，请<span class="text-blue-400 border-b border-blue-400">点击此处重新发送激活链接</span>'
        notificationType = 'warning'
        customClass = 'cursor-pointer'
        clickFunc = sendActiveMail

        break
      case 'repeat':
        message = '此账号已激活成功，请勿重复激活!'
        notificationType = 'warning'
        break
      default:
        break
    }
  }

  ElNotification({
    message,
    type: notificationType,
    dangerouslyUseHTMLString: true,
    customClass,
    onClick: clickFunc
  })
}

const afterEach = (to: RouteLocationNormalized) => {
  registerAfter(to)
}

export default afterEach
