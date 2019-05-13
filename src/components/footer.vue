<template>
 <div class="foot-btn" >
   <van-tabbar
  v-model="active"
  active-color="#07c160"
>
  <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/category">类别</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" to="/ShoppingCart">购物车</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/user">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>
<style scoped>


</style>
<script>
export default {
  data() {
    return {
      active:"",
    }
  },  
}
</script>