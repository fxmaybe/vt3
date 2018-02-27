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
          <span>{{model.name}}</span>
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
</style>