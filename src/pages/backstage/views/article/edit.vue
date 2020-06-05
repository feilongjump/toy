<template>
  <Details :title="title" />
</template>

<script>
import Details from "./components/Details";

export default {
  data () {
    return {
      title: '文章 / 编辑'
    }
  },
  components: {
    Details
  }
};
</script>
