import { createVNode, nextTick, render } from 'vue'
import MessageConstructor from './index.vue'
import { MessageQueue, MessageVM, MessageOptions, MessageParams } from './types'

let vm: MessageVM
const instances: MessageQueue = []
let seed = 1
let baseOffset = 16

export function close(id: string): void {
  const idx = instances.findIndex(({ vm }) => {
    if (vm.component) {
      const { id: _id } = vm.component.props

      return id === _id
    }
  })

  if (idx === -1) return

  const { vm, $el } = instances[idx]
  if (!vm || !vm.el) return

  const removeHeight = vm.el.offsetHeight
  render(null, $el)
  nextTick(() => {
    document.body.removeChild($el)
  })

  instances.splice(idx, 1)

  // 调整其他消息提示框的位置
  const len = instances.length
  if (len < 1) return
  // 起使位置从被移除的消息提示框开始
  for (let i = idx; i < len; i++) {
    let nextEl = instances[i].vm.el
    let nextComponent = instances[i].vm.component
    if (nextEl && nextComponent) {
      let pos = parseInt(nextEl.style['top']) - removeHeight - baseOffset

      nextComponent.props.offset = pos
      nextComponent.props.vertOffset = pos
    }
  }
}

const Message = (opts: MessageParams = {} as MessageParams) => {
  const container = document.createElement('div')

  // 传入字符串，当成是信息显示
  if (typeof opts === 'string') {
    opts = {
      message: opts,
    }
  }

  let options: MessageOptions = opts

  // 计算下一个消息提示框需要距离上一个消息提示框的距离
  let verticalOffset: number = opts.offset || 20
  instances.forEach(({ vm }) => {
    if (vm.el) {
      verticalOffset += (vm.el.offsetHeight || 0) + baseOffset
    }
  })
  verticalOffset += baseOffset

  // 分配 id 用于移除操作
  const id = 'message_' + seed++

  options = {
    ...opts,
    onClose: () => {
      close(id)
    },
    id,
    offset: verticalOffset,
  }

  vm = createVNode(MessageConstructor, options)

  render(vm, container)
  instances.push({ vm, $el: container })
  document.body.appendChild(container)
}

export default Message
