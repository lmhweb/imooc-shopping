import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title';
import Image from '@/views/Image';
Vue.use(Router)

export default new Router({
  mode:"history",//history
  //mode:"hash",//# hash
  routes: [
    // {
    //   //path: '/goods/:goodsId',动态路由 满足 /goods/:goodsId
    //   path: '/goods/:goodsId/user/:name',//动态路由 同时满足两个格式
    //   name: 'GoodsList',
    //   component: GoodsList
    // },
    //嵌套路由
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
      children:[
        {
          path:"title",
          name: 'title',
          component: Title,
        },
        {
          path:"img",
          name: 'img',
          component: Image,
        }
      ]
    }
  ]
})
