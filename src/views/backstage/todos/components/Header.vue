<template>
  <div class="pt-8 mb-8">
    <p class="text-white text-xl">Hi Toy,</p>
    <p class="text-white text-3xl font-semibold">
      Welcome to todo page<span class="cursor-pointer" @click="jump"> 📝 </span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

const jump = () => {
  const currentRoute = router.currentRoute.value

  const routeName = currentRoute.name?.toString().split('.')?.pop()

  switch (routeName) {
    case 'Todo':
      router.push({ name: 'Backstage.Todo.Add' })
      break
    default:
      router.push({ name: 'Backstage.Todo' })
      break
  }
}
</script>
