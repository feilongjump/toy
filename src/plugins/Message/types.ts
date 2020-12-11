import { VNode } from 'vue'

export type MessageOptions = {
  duration?: number // default 3000
  message?: string
  id?: string
  onClose?: () => void
  offset?: number // defaults 20
}

export type MessageParams = MessageOptions | string

export type MessageVM = VNode

type MessageQueueItem = {
  vm: MessageVM
  $el: HTMLElement
}

export type MessageQueue = Array<MessageQueueItem>
