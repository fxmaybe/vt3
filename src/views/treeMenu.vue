<template>
       <div class="doc-center-wrap">
           <div class="doc-center-slide">
              <div class="doc-center-tree" id="tree-slide">
                    <ul class="tree-menu">
                        <m-tree :model="model" v-for="model in treeModel"></m-tree>
                    </ul>
              </div>
           </div>
      </div>
</template>

<script>
    import MTree from "@/components/treeMenu/mTree.vue";

    export default {
        data(){
            return {
               treeModel: [{
                  "id": "1",
                  "data": {
                      "menuName": "项目管理",
                      "menuCode": "",
                  },
                  "childTreeNode": [{
                      "data": {
                          "menuName": "项目",
                          "menuCode": "",
                      },
                      "childTreeNode": [
                        {
                            "data": {
                                "menuName": "项目细项",
                                "menuCode": "",
                            },
                            "childTreeNode": [
                              {
                                  "data": {
                                      "menuName": "项目1",
                                      "menuCode": "BusProject1",
                                  },
                                  "childTreeNode": []
                              },
                              {
                                  "data": {
                                      "menuName": "项目1",
                                      "menuCode": "BusProject1",
                                  },
                                  "childTreeNode": []
                              }
                            ]
                        },
                        {
                            "data": {
                                "menuName": "项目1",
                                "menuCode": "BusProject1",
                            },
                            "childTreeNode": []
                        }
                      ]
                  }, {
                      "data": {
                          "menuName": "我的任务",
                          "menuCode": "BusProject",
                      },
                      "childTreeNode": []
                  }, {
                      "data": {
                          "menuName": "人员周报",
                          "menuCode": "BusProject",
                      },
                      "childTreeNode": []
                  }]
              }, {
                  "id": "2",
                  "data": {
                      "menuName": "数据统计",
                      "menuCode": "BusClock",
                  },
                  "childTreeNode": [
                        {
                            "data": {
                                "menuName": "项目1",
                                "menuCode": "BusProject1",
                            },
                            "childTreeNode": []
                        },
                        {
                            "data": {
                                "menuName": "项目1",
                                "menuCode": "BusProject1",
                            },
                            "childTreeNode": []
                        }
                      ]
              }, {
                  "id": "3",
                  "data": {
                      "menuName": "人事管理",
                      "menuCode": "",
                  },
                  "childTreeNode": []
              }, {
                  "id": "4",
                  "data": {
                      "menuName": "基础管理",
                      "menuCode": "",
                  },
                  "childTreeNode": []
              }]
            }
        },
        components: {
          MTree
        },
        methods:{
        }
    }
</script>