<template>
  <div class="count-content">
    {{count}}
    <button @click="add">加1</button>&nbsp;&nbsp;<button @click="reduce">减1</button>
  </div>
</template>
<script>
export default {
  name: 'countTest',
  data() {
    return {
      count: 0
      
    }
  },
  methods: {
    add(){
      this.count ++;
      this.$emit("change", {count: this.count, step: 1});
    },
    reduce(){
      this.count --;
      this.$emit("change", {count: this.count, step: -1});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
