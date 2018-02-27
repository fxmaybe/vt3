 <template>
      <el-submenu v-if="isFolder" :index="model.id">
        <template  slot="title">
          <i v-if="model.meta.icon" :class="[iconClass(model.meta.icon)]"></i>
          <span>{{model.data.menuName}}</span>
        </template>
        <m-tree2 v-for="cel in model.childTreeNode" :key="cel.id" :model="cel"></m-tree2>
      </el-submenu>
      <el-menu-item v-else :index="model.id">
        <i v-if="model.meta.icon" :class="[iconClass(model.meta.icon)]"></i>
        <span slot="title">{{model.data.menuName}}</span>
      </el-menu-item> 
</template>

<script>
  export default {
    name: "mTree2",
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
        return this.model.childTreeNode && this.model.childTreeNode.length
      }
    }
  }
</script>

<style>
</style>