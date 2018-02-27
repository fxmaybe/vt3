<template>
       <div class="tree-menu">
          <el-menu
            default-active="2"
            class="el-menu-vertical-left"
            @open="handleOpen"
            @close="handleClose"
            background-color="#32435f"
            text-color="#ffffff"
            active-text-color="#409efe">
              <m-tree2 :model="model" :key="model.id" v-for="model in treeModel"></m-tree2>
          </el-menu>
      </div>
</template>

<script>
    import MTree2 from "@/components/treeMenu/mTree2.vue";

    export default {
        data(){
            return {
              treeModel: [
                  {
                      "id": "1",
                      "data":{
                          "menuName": "项目管理",
                          "menuCode": ""
                      },
                      "meta": {
                        "icon": "location"
                      },
                      "childTreeNode":[
                          {
                              "id": "11",
                              "data":{
                                  "menuName": "项目1",
                                  "menuCode": ""
                              },
                              "meta": {},
                              "childTreeNode":[
                                  {
                                      "id": "111",
                                      "data":{
                                          "menuName": "项目11",
                                          "menuCode": ""
                                      },
                                      "meta": {},
                                      "childTreeNode":[
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "12",
                              "data":{
                                  "menuName": "项目2",
                                  "menuCode": "BusProject"
                              },
                              "meta": {},
                              "childTreeNode":[
                              ]
                          }
                      ]
                  },
                  {
                      "id": "2",
                      "data":{
                          "menuName": "数据统计",
                          "menuCode": "BusClock"
                      },
                      "meta": {
                        "icon": "menu"
                      },
                      "childTreeNode":[
                          {
                              "id": "21",
                              "data":{
                                  "menuName": "数据统计1",
                                  "menuCode": "BusProject1"
                              },
                              "meta": {},
                              "childTreeNode":[
                              ]
                          },
                          {
                              "id": "22",
                              "data":{
                                  "menuName": "数据统计2",
                                  "menuCode": "BusProject2"
                              },
                              "meta": {},
                              "childTreeNode":[

                              ]
                          }
                      ]
                  },
                  {
                      "id": "3",
                      "data":{
                          "menuName": "人事管理",
                          "menuCode": ""
                      },
                      "meta": {
                        "icon": "setting"
                      },
                      "childTreeNode":[

                      ]
                  }
              ]
            }
        },
        components: {
          MTree2
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

<style>
  .tree-menu .el-menu-vertical-left {
    border: none;
  }

  .tree-menu .el-submenu__title i, .tree-menu .el-menu-item i {
    color: #ffffff;
  } 
</style>