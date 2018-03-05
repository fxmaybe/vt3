<template>
  <div class="main-layout" :class="{'layout-small': isCollapse}">
    <top-bar />
    <scroll-bar>
      <side-bar class="sidebar-container"></side-bar>
    </scroll-bar>
    <main-area />
  </div>
</template>
<script>
import {mapGetters} from "vuex";
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
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
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
