<template>
  <header class="h-16 w-full py-4 flex justify-end items-center">
    <div>
      <router-link :to="{ name: 'Article.Create' }">写点什么吧！</router-link>
      <span class="font-semibold">
        有新消息！
      </span>
    </div>
  </header>
</template>
