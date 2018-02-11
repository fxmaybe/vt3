 <template>

      <el-submenu v-if="isFolder" :index="model.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{model.data.menuName}}</span>
        </template>
        <m-tree v-for="cel in model.childTreeNode" :key="cel.id" :model="cel"></m-tree>
      </el-submenu>
      <el-menu-item v-else :index="model.id">{{model.data.menuName}}</el-menu-item> 
</template>

<script>
  export default {
    name: "mTree",
    props: ["model"],
    data() {
      return {
      }
    },
    methods: {
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