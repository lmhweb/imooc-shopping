<template>
    <div>
       这是商品列表页面
      <span>{{$route.params.goodsId}}</span><br>
      <span>{{$route.params.name}}</span><br>
      <div>
        <router-link to="/goods/title">显示商品标题</router-link>
        <router-link to="/goods/img">显示商品图片</router-link>
      </div>
      <div>
      <router-view>

      </router-view>
      </div>
    </div>
</template>
<style>

</style>

<script>
    export default {
        data(){
            return {
                msg: "hello vue"
            }
        }
    }
</script>

