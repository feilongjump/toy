<template>
  <div class="h-screen w-full flex justify-center items-center flex-col">
    <input type="text" class="pl-4 mb-4 border rounded-xl shadow-2xl focus:outline-none" />
    <input type="password" class="pl-4 mb-4 border rounded-xl focus:outline-none" />
    <div
      class="border rounded-xl px-4 py-2 shadow-2xl focus:outline-none cursor-pointer"
      @click="go"
    >
      GO
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

const go = () => {
  router.push({ name: 'Backstage.Dashboard' })
}
</script>
