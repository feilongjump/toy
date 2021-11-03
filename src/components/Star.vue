<template>
  <div class="star w-1 h-1"></div>
  <div class="star w-0.5 h-0.5 left-10"></div>
  <div class="star w-px h-px left-20"></div>
</template>

<script setup lang="ts"></script>

<style>
.star {
  @apply fixed bg-white;
  animation: up 15s linear infinite;
}

@keyframes up {
  from {
    @apply bottom-0;
  }
  to {
    @apply bottom-full;
  }
}
</style>
