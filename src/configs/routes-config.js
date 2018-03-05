module.exports = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      icon: "location",
      id: 1
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      icon: "news",
      id: 5
    }
  },
  {
    path: '/demoMenu',
    name: 'DemoMenu',
    component: () => import('@/views/treeMenu/index.vue'),
    redirect: '/demoMenu/treeMenu',
    meta: {
      icon: "menu",
      id: 2
    },
    children: [
      {
        path: '/demoMenu/treeMenu',
        name: 'TreeMenu',
        component: () => import('@/views/treeMenu/TreeMenu.vue'),
        meta: {
          id: 21
        }
      },
      {
        path: '/demoMenu/treeMenu2',
        name: 'TreeMenu2',
        component: () => import('@/views/treeMenu/TreeMenu2.vue'),
        meta: {
          id: 22
        }
      }
    ]
  },
  {
    path: '/viewDemo',
    name: 'ViewDemo',
    component: () => import('@/views/viewTest/index.vue'),
    redirect: '/viewDemo/viewTest1',
    meta: {
      icon: "star-on",
      id: 3
    },
    children: [
      {
        path: '/viewDemo/viewTest1',
        name: 'ViewTest1',
        component: () => import('@/views/viewTest/ViewTest1.vue'),
        meta: {
          id: 31
        }
      },
      {
        path: '/viewDemo/viewTest2',
        name: 'ViewTest2',
        component: () => import('@/views/viewTest/ViewTest2.vue'),
        meta: {
          id: 32
        }
      }
    ]
  },
  {
    path: '/viewTestX1',
    name: 'ViewTestX1',
    component: () => import('@/views/viewTest/ViewTest1.vue'),
    meta: {
      icon: "message",
      id: 4
    }
  }
];


