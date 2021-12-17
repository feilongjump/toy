<template>
  <Header />

  <Details :is-edit="false" />
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import Details from './components/Details.vue'
</script>
