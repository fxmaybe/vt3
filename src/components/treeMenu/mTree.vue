 <template>
      <li>
        <div @click="toggle">
    　　
             <i v-if="isFolder" class="fa " :class="[open?'fa-folder-open':'fa-folder']"></i>
    　　　　　<!--isFolder判断是否存在子级改变图标-->
             <i v-if="!isFolder" class="fa fa-file-text"></i> {{model.data.menuName}}
         </div>
         <ul v-show="open" v-if="isFolder">
              <mTree v-for="cel in model.childTreeNode" :model="cel"></mTree>
         </ul>
     </li>
</template>

<script>
  export default {
    name: "mTree",
    props: ["model"],
    data() {
      return {
        open: false
      }
    },
    methods: {
  　　toggle: function() {
        if(this.isFolder) {
          this.open = !this.open
        }
  　　}
    },
    computed: {
      isFolder() {
        return this.model.childTreeNode && this.model.childTreeNode.length
      }
    }
  }
</script>

<style>
</style>