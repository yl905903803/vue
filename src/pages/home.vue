<template>
  <div class="home">  
  <van-row>
  <van-col span="8" class="logo"><img :src="logo" class="logo"/></van-col>
  <van-col span="14">
  <van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  shape="round"
  >
 
</van-search></van-col>
  <van-col span="2"><van-icon name="qr" color="red" size="30px" class="qr"/></van-col>
  </van-row>
    <van-swipe :autoplay="3000" indicator-color="white">
   <van-swipe-item v-for="(image, index) in images" :key="index">
    <img :src="image" class="swipe-item-img" />
     </van-swipe-item>
  </van-swipe>
  <div class="box">
     <div class="box-sale margin clear">
            <div class="title">
                <span class="title-sale">优惠促销</span>
               
            </div>
            <div class="box-cont">
                <ul class="hot_sale_snack">
                <li class="hot-sale-li" v-for="(item, index) of list" :key="">
                 <p><img :src="item.src" class="box-cont-img"/></p>
                <p><a class="name">{{item.name}}</a></p>
                <p class="price">{{item.price}}</p>
                
                </li>
                 </ul>
            </div>
    </div>
  </div>    
</div>
</template>
<script>
export default {
  data() {
    return {
      value:'',
     images: [
        '/assets/img/banner1.jpg',
        '/assets/img/banner2.jpg',
        '/assets/img/banner3.jpg',
        '/assets/img/banner4.jpg',
       ],
       logo:"/assets/img/logo.png",
       list:[]
    }
  },
  mounted(){
    axios({url:'/data/data1.json'}).then(
      res=>this.list=res.data
    )
  },
}
</script>
<style scoped>
.box{background:#f7f7f7;}
.logo{color:red;width:100px;height:50px}
.qr{padding:15px 10px;}
.swipe-item-img{width: 100%;}
.box-sale{margin-top: 25px;margin-bottom: 25px;}
.title {width: 100%;height: 30px;clear: both;position: relative;}
.title-sale{width: 30%;height: 27px;display: block;float: left;font: 800 24px/27px "";}
 .box-cont{    width: 100%;
    height: 150px;
    background: #fff;}
  .hot-sale-li{   
    text-align: center;
    width: 50%;
    height: 280px;
    float: left;
    display: block;
    line-height: 18px;
    position: relative;
    background: #fff;}
    .box-cont-img{width:120px;height:180px}
    .price{font-size: 18px;
    line-height: 30px;
    color: #e7283a;
    margin-left: 18px;
    margin-top: 0;}
    .name{overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #777;
    display: block;
    width: 180px;
    height: 20px;
    margin: 0 auto;
    text-align: center;
    font-size: 12px}
</style>