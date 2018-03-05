<template>
  <div class="content">
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>
<script>
export default {
  name: 'mainArea'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.content {padding-left: 200px; padding-top: 20px;}
	.layout-small .content {padding-left: 64px; }
</style>