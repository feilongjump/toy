import { App } from 'vue'
import Message from './message'
;(Message as any).install = (app: App): void => {
  app.config.globalProperties.$message = Message
}

export default Message
