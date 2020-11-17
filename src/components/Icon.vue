<template>
  <svg
    class="icon inline"
    :class="[width, height, className]"
    aria-hidden="true"
  >
    <use :xlink:href="href"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    href: {
      required: true,
      type: String,
    },
    width: {
      type: String,
      default: 'w-6',
    },
    height: {
      type: String,
      default: 'h-6',
    },
    className: {
      type: Array,
    },
  },
})
</script>
