<template>
  <Details :title="title" />
</template>

<script>
import Details from "./components/Details";

export default {
  data () {
    return {
      title: '文章 / 添加'
    }
  },
  components: {
    Details
  }
};
</script>
