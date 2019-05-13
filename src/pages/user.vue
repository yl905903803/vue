<template>
  <div class="user">
    <div class="user-top">
        <van-row>
          <van-col span="3"><van-icon name="friends-o" size="40px"></van-icon></van-col>
          <van-col span="17">昵称<van-icon name="vip-card-o" size="20px" class="vip"></van-icon></van-col>
          <van-col span="4">
           <van-icon name="setting-o" size="20px"></van-icon>&nbsp;
           <van-icon name="coupon-o" size="20px"></van-icon>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="user-top-b">
        <van-col span="4">收藏夹</van-col>
        <van-col span="6">关注店铺</van-col>
        <van-col span="4">足迹</van-col>
        <van-col span="4">红包</van-col>
       </van-row>
    </div>
  </div>
</template>

<style scoped>
  .user-top{
    background:#ffcb97;padding:20px 15px 5px;
  }
  .vip{margin-top:5px}
  .user-top-b{font:12px/60px "";height:60px;}
</style>