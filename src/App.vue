<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
import Layout from "@/components/Layout.vue";
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

#app .scroll-container {
    -webkit-transition: width 0.28s;
    transition: width 0.28s;
    width: 200px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    background: #fff;
}

 #app .layout-small .scroll-container {
  width: 64px;
}
</style>
