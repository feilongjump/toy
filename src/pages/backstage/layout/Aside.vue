<template>
  <el-aside class="h-full hidden-md-and-down">
    <Logo />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        router
      >
        <SidebarItem
          v-for="(menu, key) in menus"
          :key="key"
          :menu="menu"
        />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import Logo from './components/Logo'
import SidebarItem from './components/SidebarItem'

export default {
  data () {
    return {
      menus: [
        {
          title: "仪表盘",
          path: "/backstage/dashboard",
          icon: "el-icon-data-line"
        },
        {
          title: "文章",
          path: "/backstage/articles",
          icon: "el-icon-notebook-2"
        }
      ]
    }
  },
  components: {
    Logo,
    SidebarItem
  },
  computed: {
    activeMenu () {
      const route = this.$route;
      const { meta, path } = route;

      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  }
}
</script>
