<template>
  <div class="select-content">
    <div class="select-input grey center" @click.stop="toggle" onselectstart="return false;">{{triggerTxt}}</div>
    <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
      <div class="black select" v-show="selected" @click.stop>
        <div class="dark-grey center" @click.stop="getSelectVal">
          <span class="yellow">行内元素</span>
        </div>
        <div class="dark-grey">
          <div class="grey center">
              <span class="yellow">行内元素</span>
          </div>
        </div>
        <div class="dark-grey">
          <div class="grey">
            <div class="light-grey center"><span class="yellow">行内元素</span></div>
          </div>
        </div>
      </div>
    </transition>
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
  mounted() {
    let that  = this;
    document.body.addEventListener("click", function () {
      that.selected = false;
    }, false);
  },
  methods: {
    toggle() {
      this.selected = !this.selected;
    },
    open() {
      this.selected = true;
    },
    close() {
      this.selected = false;
    },
    getSelectVal(e) {
      let that = this;

      that.close();
    },
    cancelSelectStart() {
      return false;
    }
  },
  computed: {
    triggerTxt() {
      return this.selected ? "点击收起" : "点击展开";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .red {
    background: red;
  }
  .select-input {
    cursor: pointer;
  }
  .select-input, .select {
    width: 300px;
    padding: 10px; 
    margin-top: 10px;
  }
  .select {
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .selected {
    display: block;
  }
  .select div {
    padding: 10px; 
    margin: 10px;
  }
  .black {
    background: #333;
  }
  .dark-grey {
    background: #666;
  }
  .grey {
    background: #999;
  }
  .light-grey {
    background: #aaa;
  }
  .yellow {
    background: yellow;
  }
  .center { 
    text-align: center;
  }
</style>
