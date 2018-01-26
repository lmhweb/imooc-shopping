import Vue from 'vue';
import Router from 'vue-router';
import GoodsList from '@/views/GoodsList';

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
    {
      path: "/",
      redirect:"/goods",
      component: GoodsList,
    },
    {
      path: "/goods",
      name: 'GoodsList',
      component: GoodsList,
    }
  ]
})
