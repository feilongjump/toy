<template>
  <div class="pt-8 mb-8">
    <p class="text-white text-xl">Hi Toy,</p>
    <p class="text-white text-3xl font-semibold">
      Welcome to article page<span class="cursor-pointer" @click="jump"> 🕮</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

const jump = () => {
  const currentRoute = router.currentRoute.value

  const routeName = currentRoute.name?.toString().split('.')?.pop()

  switch (routeName) {
    case 'Article':
      router.push({ name: 'Backstage.Article.Add' })
      break
    default:
      router.push({ name: 'Backstage.Article' })
      break
  }
}
</script>
