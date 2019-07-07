import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Table from './components/Table.vue'
import List from './views/List.vue'
 

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home,  
      children:[
        {
        path:"/table",                
            // component:() => import('./components/Table.vue'),
        name:"表格",
        component:Table, 
        },
        {
          path:"/List",
          name:"轮播",
          component:List, 
        }
    ]
    }
    // {
    //   path: '/list',
    //   name: 'list',
    //   component:() => import('./views/List.vue')   
    // },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component:() => import('./views/Cart.vue') 
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component:() => import('./views/Profile.vue') 
    // },
    // {
    //   path: '/shouye',
    //   name: 'shouye',
    //   component:() => import('./views/shouye.vue') 
    // }
  ]
})
