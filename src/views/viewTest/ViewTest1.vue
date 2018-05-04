<template>
  <div class="count-test">
    我是 ViewTest1
	<br />
	<br />
	{{count}}
    <count-test @change="countChange"></count-test>
    <count-test @change="countChange"></count-test>
  </div>
</template>
<script>
import countTest from "@/components/testUnit/countTest";
export default {
  name: 'ViewTest1',
  data() {
  	return {
  		count: 0
  	}
  },
  components: {
  	countTest
  },
  methods: {
  	countChange(data){
  		this.count += data.step;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.count-test {padding-left: 20px; padding-top: 20px;}
</style>
