<template>
  <div class="main-layout">
    <top-bar />
    <scroll-bar>
      <side-bar class="sidebar-container"></side-bar>
    </scroll-bar>
    <main-area />
  </div>
</template>
<script>
import TopBar from "@/components/layout/TopBar.vue";
import SideBar from "@/components/layout/SideBar/index.vue";
import ScrollBar from "@/components/layout/ScrollBar.vue";
import MainArea from "@/components/layout/MainArea.vue";
export default {
  name: 'MainLayout',
  data () {
    return {
    }
  },
  components: {
    TopBar,
    SideBar,
    ScrollBar,
    MainArea
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
