import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import TreeMenu from '@/views/TreeMenu.vue'
import TreeMenu2 from '@/views/TreeMenu2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/treeMenu',
      name: 'TreeMenu',
      component: TreeMenu
    },
    {
      path: '/treeMenu2',
      name: 'TreeMenu2',
      component: TreeMenu2
    }
  ]
})
