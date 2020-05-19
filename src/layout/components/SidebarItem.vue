<template>
  <div v-if="!menu.hidden">
    <el-menu-item
      v-if="hasOneShowingChild(menu)"
      :index="resolvePath(menu.path)"
    >
      <i :class="menu.icon"></i>
      <span slot="title">{{ menu.title }}</span>
    </el-menu-item>

    <el-submenu
      v-else
      :index="resolvePath(menu.path)"
    >
      <template slot="title">
        <i :class="menu.icon"></i>
        <span>{{ menu.title }}</span>
      </template>
      <sidebar-item
        v-for="(subMenu, subKey) in menu.children"
        :key="subKey"
        :menu="subMenu"
        :basePath="menu.path"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
import { isEmpty, filter } from "lodash";

export default {
  name: "SidebarItem",
  props: {
    menu: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  methods: {
    hasOneShowingChild (menu) {
      if (isEmpty(menu.children)) return true;

      let submenu = filter(menu.children, ["hidden", false]);

      if (submenu.length === 1) {
        return true;
      } else {
        return false;
      }
    },
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>
