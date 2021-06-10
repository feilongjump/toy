<template>
  <div class="h-12 sm:h-20 mb-4 flex items-center">
    <div class="h-10 w-full flex justify-between items-center">
      <div class="h-full flex rounded-full shadow-lg">
        <span class="h-full w-16 flex justify-center items-center bg-white rounded-l-full">
          <Search />
        </span>
        <input
          class="focus:outline-none h-full w-80 border-r"
          placeholder="Type keyword to find your search..."
          type="text"
        />
        <span class="h-full w-24 flex justify-center items-center bg-white rounded-r-full">
          Filter
          <Down class="ml-2" />
        </span>
      </div>
      <div class="h-full flex">
        <div
          class="h-full bg-white w-10 rounded-2xl flex justify-center items-center shadow-lg cursor-pointer"
        >
          <span class="relative">
            <div class="h-2 w-2 bg-red-400 rounded-full absolute -top-1 left-1/2"></div>
            <Remind />
          </span>
        </div>
        <div
          class="h-full bg-white w-10 rounded-2xl flex justify-center items-center shadow-lg cursor-pointer ml-4"
        >
          <SettingTwo />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Down, Remind, Search, SettingTwo } from '@icon-park/vue-next'
</script>
