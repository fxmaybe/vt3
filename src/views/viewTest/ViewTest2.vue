<template>
  <div class="select-test">
    我是 ViewTest2
    <select-test></select-test>
    <select-test></select-test>
  </div>
</template>
<script>
import selectTest from "@/components/testUnit/selectTest";
export default {
  name: 'ViewTest2',
  components: {
  	selectTest
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.select-test {padding-left: 20px; padding-top: 20px;}
</style>
