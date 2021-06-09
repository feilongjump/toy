<template>
  <div class="h-12 sm:h-20 mb-4 rounded-2xl flex items-center">
    <div class="h-12 flex">
      <span class="h-full w-16 flex justify-center items-center bg-white rounded-l-full">
        <Search />
      </span>
      <input
        class="focus:outline-none h-full w-80"
        placeholder="Type keyword to find your search..."
        type="text"
      />
      <span class="h-full w-24 flex justify-center items-center bg-white rounded-r-full">
        Filter
        <Down class="ml-2" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Down, Search } from '@icon-park/vue-next'
</script>
