<template>
  <div class="content">
    我是 HomePage
    <input @change="fileChange" type="file" />
    <img :src="fileImg" />
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data() {
  	return {
  		fileImg: null
  	}
  },
  methods: {
  	fileChange(e) {
  		console.log(e);
  		var reader = new FileReader();
  		var self = this;
        reader.onload = function(e) {
           self.fileImg = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
