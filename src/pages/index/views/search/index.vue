<template>
  <el-row id="search-page" class="h-full" type="flex" justify="center" align="middle">
    <el-col id="search-box" class="h-144 w-2/3">
      <div id="search-icons" class="h-full w-full" ref="searchBox">
        <template v-for="(icon, key) in icons">
          <i :class="icon.class" :key="key" :style="icon.style" @click="icon.eggs && eggs()"></i>
        </template>
      </div>
      <el-row id="search-center-box" class="w-1/4">
        <el-col class="text-center">
          <el-image :src="logo"></el-image>
        </el-col>
        <el-col>
          <el-input id="search-input" v-model="keywords"></el-input>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import logo from "@/assets/logo.png";
import { trim, divide, floor, random } from "lodash";

export default {
  data () {
    return {
      icons: [],
      iconClass: [
        'el-icon-ship',
        'el-icon-basketball',
        'el-icon-football',
        'el-icon-soccer',
        'el-icon-baseball',
        'el-icon-power',
        'el-icon-sunrise',
        'el-icon-lightning',
        'el-icon-sunny',
        'el-icon-moon',
        'el-icon-sugar',
        'el-icon-watermelon',
        'el-icon-grape',
        'el-icon-cherry',
        'el-icon-potato-strips',
        'el-icon-lollipop',
        'el-icon-ice-cream-square',
        'el-icon-ice-cream-round',
      ],
      breathIcons: [
        'el-icon-sunny',
        'el-icon-moon',
      ],
      breathColor: [
        'text-blue',
        'text-pink',
        'text-purple',
        'text-deep-purple',
        'text-orange'
      ],
      logo: logo,
      keywords: ''
    }
  },
  mounted () {
    this.randomDistribution()
  },
  methods: {
    /**
     * icons 随机分布
     */
    randomDistribution () {
      let widthNumber = 8;
      let heightNumber = 6;
      let searchBoxHeight = window.getComputedStyle(this.$refs.searchBox).height;
      let searchBoxWidth = window.getComputedStyle(this.$refs.searchBox).width;
      searchBoxHeight = parseInt(trim(searchBoxHeight, 'px'));
      searchBoxWidth = parseInt(trim(searchBoxWidth, 'px'));

      let smallBoxHeight = floor(divide(searchBoxHeight, heightNumber));
      let smallBoxWidth = floor(divide(searchBoxWidth, widthNumber));

      let icons = [];
      for(let i = 0; i < widthNumber; i++) {

        for (let j = 0; j < heightNumber; j++) {
          let icon = {};
          let iconClass = this.iconClass[random(0, this.iconClass.length - 1)];
          icon.style = {};
          icon.class = [ iconClass ];

          if (this.breathIcons.includes(iconClass)) {
            icon.style['animation-duration'] = random(1.5, 3, true) + 's'
            let iconColor = this.breathColor[random(0, this.breathColor.length - 1)];
            icon.class.push([ 'breathing-lamp', 'cursor-pointer', iconColor ])
            icon.eggs = true
          }

          icon.style.left = random(smallBoxWidth * i, smallBoxWidth * (i + 1)) + 'px'
          if (j !== 0) {
            icon.style.top = random(smallBoxHeight * j, smallBoxHeight * (j + 1) - 1) + 'px'
          }

          icons.push(icon)
        }

      }

      this.icons = icons
    },
    /**
     * 彩蛋
     */
    eggs() {
      this.$message({
        message: "这是个彩蛋~",
        iconClass: 'el-icon-lollipop',
        duration: 0
      });
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/variables.scss';

#search-box {
  position: relative;

  #search-center-box {
    background: $indexBackgroundColor;
    position: absolute;
    top: 20%;
    transform: translateX(150%);

    #search-input {
      border-radius: 0.625rem !important;
    }
  }
}

#search-icons {
  position: relative;
  color: gray;

  i {
    font-size: 1.25rem;
    transform: rotate(-45deg);
    position: absolute;
  }
}

.breathing-lamp {
  animation-name: breath;                         /* 动画名称 */
  animation-timing-function: ease-in-out;         /* 动画速度曲线：以低速开始和结束 */
  animation-iteration-count: infinite;            /* 播放次数：无限 */
}
@keyframes breath {
    from { opacity: 0.1; }                          /* 动画开始时的不透明度 */
    50%  { opacity:   1; }                          /* 动画50% 时的不透明度 */
    to   { opacity: 0.1; }                          /* 动画结束时的不透明度 */
}
</style>
