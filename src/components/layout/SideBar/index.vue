<template>
  <div class="side-bar">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-left"
      @open="handleOpen"
      @close="handleClose"
      background-color="#32435f"
      text-color="#ffffff"
      :router="useRouter"
      active-text-color="#409efe">
        <sidebar-item :model="model" :key="model.meta.id" v-for="model in routes"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem.vue";
import RoutesConfig from '@/configs/routes-config';
export default {
  name: 'SideBar',
  data () {
    return {
      routes: RoutesConfig,
      useRouter: true
    }
  },
  created(){
    console.log(this.useRouter);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    SidebarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .side-bar {
    width: 200px;
  }
  .el-menu {border: none;}
  .side-bar .el-menu-vertical-left {
    border: none;
  }

  .side-bar .el-submenu__title i, .side-bar .el-menu-item i {
    color: #ffffff;
  } 
</style>
