<template>
  <div class="hello">
    <scroll-bar>
      <side-bar class="sidebar-container"></side-bar>
    </scroll-bar>
    <el-button>按钮</el-button>
  </div>
</template>
<script>
import SideBar from "@/views/layout/sideBar.vue"
import ScrollBar from "@/components/ScrollBar/index.vue"
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    SideBar,
    ScrollBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
