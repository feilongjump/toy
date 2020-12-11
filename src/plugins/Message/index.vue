<template>
  <div
    class="w-72 fixed right-4 py-3 px-6 bg-white rounded-xl shadow-2xl"
    :id="id"
    :style="customStyle"
    v-show="visible"
  >
    <div class="flex flex-col">
      <span class="text-sm text-gray-400 ml-4">
        {{ message }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, PropType, watch } from 'vue'

export default defineComponent({
  name: 'ElMessage',
  props: {
    id: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: 'Hello Message Plugin',
    },
    duration: {
      type: Number,
      default: 3000,
    },
    offset: {
      type: String,
      default: '',
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  setup(prop) {
    const visible = ref(false)

    onMounted(() => {
      visible.value = true

      setTimeout(() => {
        visible.value = false
      }, prop.duration)
    })

    watch(visible, currentVisible => {
      if (currentVisible === false) {
        prop.onClose()
      }
    })

    return {
      visible,
      customStyle: computed(() => {
        return {
          top: `${prop.offset}px`,
          zIndex: 99999,
        }
      }),
    }
  },
})
</script>
