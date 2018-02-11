<template>
       <div class="doc-center-wrap">
           <div class="doc-center-slide">
              <div class="doc-center-tree" id="tree-slide">
                    <el-menu
                      default-active="2"
                      class="el-menu-vertical-left"
                      @open="handleOpen"
                      @close="handleClose"
                      background-color="#32435f"
                      text-color="#ffffff"
                      active-text-color="#409efe">
                        <m-tree :model="model" :key="model.id" v-for="model in treeModel"></m-tree>
                    </el-menu>
              </div>
           </div>
      </div>
</template>

<script>
    import MTree from "@/components/treeMenu/mTree2.vue";

    export default {
        data(){
            return {
              treeModel: [
                  {
                      "id":"1",
                      "data":{
                          "menuName":"项目管理",
                          "menuCode":""
                      },
                      "meta": {
                        "icon": ""
                      },
                      "childTreeNode":[
                          {
                              "id":"11",
                              "data":{
                                  "menuName":"项目1",
                                  "menuCode":""
                              },
                              "childTreeNode":[
                                  {
                                      "id":"111",
                                      "data":{
                                          "menuName":"项目1细项",
                                          "menuCode":""
                                      }
                                  }
                              ]
                          },
                          {
                              "id":"12",
                              "data":{
                                  "menuName":"项目2",
                                  "menuCode":"BusProject"
                              },
                              "childTreeNode":[

                              ]
                          }
                      ]
                  },
                  {
                      "id":"2",
                      "data":{
                          "menuName":"数据统计",
                          "menuCode":"BusClock"
                      },
                      "childTreeNode":[
                          {
                              "id":"21",
                              "data":{
                                  "menuName":"数据统计1",
                                  "menuCode":"BusProject1"
                              },
                              "childTreeNode":[

                              ]
                          },
                          {
                              "id":"22",
                              "data":{
                                  "menuName":"数据统计2",
                                  "menuCode":"BusProject2"
                              },
                              "childTreeNode":[

                              ]
                          }
                      ]
                  },
                  {
                      "id":"3",
                      "data":{
                          "menuName":"人事管理",
                          "menuCode":""
                      },
                      "childTreeNode":[

                      ]
                  }
              ]
            }
        },
        components: {
          MTree
        },
        methods:{
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>