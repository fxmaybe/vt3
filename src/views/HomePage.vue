<template>
  <div class="home">
    我是 HomePage
    <input @change="fileChange" type="file" />
    <br />
    <br />
    <img style="width: 200px;" :src="fileImg" />
    <br />
    <br />
    <div v-for="(option,index) in options">
      <input v-model="postOptions" :value="option" :id="'demo'+index" type="checkbox">
      <label :for="'demo'+index" v-text="option"></label>
    </div>
    {{postOptions}}
    git test
    <br />
    <br />
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data() {
  	return {
      testVal: "wtf",
      options: ["A","B","C","D","E","F"],
      postOptions: ["B","C","E"],
  		fileImg: null
  	}
  },
  methods: {
  	fileChange(e) {
  		console.log(this.funs.fun1());
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
.home {padding-left: 20px; padding-top: 20px;}
</style>
