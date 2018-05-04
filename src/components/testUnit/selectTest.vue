<template>
  <div class="select-content">
    <div class="select-input gray center" @click="toggle" @selectstart="cancelSelectStart">{{triggerTxt}}</div>
    <div class="black select" :class="{selected: selected}"> 
      <div class="dark-grey center">
        <span class="yellow">行内元素</span>
      </div>
      <div class="dark-grey">
        <div class="gray center">
            <span class="yellow">行内元素</span>
        </div>
      </div>
      <div class="dark-grey">
        <div class="gray">
          <div class="light-gray center"><span class="yellow">行内元素</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'selectTest',
  data() {
    return {
      selected: false
      
    }
  },
  methods: {
    toggle(){
      this.selected = !this.selected;
    },
    open(){
      this.selected = true;
    },
    close(){
      this.selected = false;
    },
    cancelSelectStart(){
      return false;
    }
  },
  computed: {
    triggerTxt(){
      return this.selected ? "点击收起" : "点击展开";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  * {margin: 0; padding: 0;}
  .select-input {cursor: pointer;}
  .select-input, .select {width: 300px;padding: 10px; margin-top: 10px;}
  .select {display: none;}
  .selected {display: block;}
  .select div {padding: 10px; margin: 10px;}
  .black {background: #333;}
  .dark-grey {background: #666;}
  .gray {background: #999;}
  .light-gray {background: #aaa;}
  .yellow {background: yellow;}
  .center { text-align: center;}
</style>
