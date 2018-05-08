 <template>
      <el-submenu v-if="isFolder" :index="model.path">   
          <template  slot="title">
              <i v-if="model.meta.icon" :class="[iconClass(model.meta.icon)]"></i>
              <span>{{model.name}}</span>
          </template>
        <sidebar-item v-for="cel in model.children" :key="cel.meta.id" :model="cel"></sidebar-item>
      </el-submenu>     
      <el-menu-item v-else :index="model.path">
          <i v-if="model.meta.icon" :class="[iconClass(model.meta.icon)]"></i>
          <span slot="title">{{model.name}}</span>
      </el-menu-item> 
</template>

<script>
  export default {
    name: "SidebarItem",
    props: ["model"],
    data() {
      return {
      }
    },
    methods: {
      iconClass(cls){
        return "el-icon-"+ cls
      }
    },
    fitlers: {
      
    },
    computed: {
      isFolder() {
        return this.model.children && this.model.children.length
      }
    }
  }
</script>

<style>
  .el-menu-item:focus, .el-menu-item:hover {
    background: #f3f8ff;  
  }
  .el-menu-item.is-active {
    /*background: rgb(40, 54, 76)!important;*/
    background: #ecf5ff;
  }
  .el-submenu.is-active .el-submenu__title{
    background: #ecf5ff;
  }
  .el-submenu.is-active .el-submenu__title, .el-submenu.is-active .el-submenu__title i {
    color: #409eff;  
  }
  .el-submenu.is-active.is-opened .el-submenu__title{
    background: none;
    color: #303133;
  }
  .el-submenu.is-active.is-opened .el-submenu__title i { 
    color: #909399;
  }
 .el-submenu__title:hover, .el-submenu.is-active.is-opened .el-submenu__title:hover {
    background: #f4f9ff;  
  }

  .el-menu--popup {
    padding: 0;
  }
</style>