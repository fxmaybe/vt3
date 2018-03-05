<template>
  <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll" >
    <div class="expend-tool" @click="toggleSideBar"><i class="icon iconfont icon-caidan"></i></div>
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{top: top + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const delta = 15

export default {
  name: 'ScrollBar',
  data() {
    return {
      top: 0
    }
  },
  computed: {
  },
  methods: {
    handleScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 3
      const $container = this.$refs.scrollContainer
      const $containerHeight = $container.offsetHeight
      const $wrapper = this.$refs.scrollWrapper
      const $wrapperHeight = $wrapper.offsetHeight
      if (eventDelta > 0) {
        this.top = Math.min(0, this.top + eventDelta)
      } else {
        if ($containerHeight - delta < $wrapperHeight) {
          if (this.top < -($wrapperHeight - $containerHeight + delta)) {
            this.top = this.top
          } else {
            this.top = Math.max(this.top + eventDelta, $containerHeight - $wrapperHeight - delta)
          }
        } else {
          this.top = 0
        }
      }
    },
    toggleSideBar() {
      this.$store.dispatch('toggleSidebarAct')
    }
  }
}
</script>

<style scoped>

.scroll-container {
  position: relative;
  width: 100%;
  height: 100%;
  /*background-color: #32435f;*/
  border-right: 1px solid #e5e5e5;
  
}

.scroll-wrapper {
  position: absolute;
  width: 100%!important;
  padding-top: 60px;
}

.scroll-container .expend-tool {
  width: 36px;
  height: 36px;
  line-height: 36px;
  position: absolute;
  top: 60px;
  right: -37px;
  text-align: center;
}
.scroll-container .expend-tool .icon {
  font-size: 22px; 
  color: #909399;
  cursor: pointer;
}
.scroll-container .expend-tool:hover {
  background: #ecf5ff;
  border-radius: 0 0 4px 0;
}
.scroll-container .expend-tool:hover .icon {
  color: #409eff;
}
</style>
