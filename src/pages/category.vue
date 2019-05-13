<template>
  <div class="category">
    <van-tabs v-model="active">
    <van-tab title="辣条">
       <van-cell-group> 
        <van-cell title="拾光悠味网红辣皮125g" is-link="true" label="	种类：豆干/豆制品	食用方法：打开即可食用
生产日期：2018-09	保质期：6个月	储存方法：请置于阴凉干燥处，避光保存。"/>
        <van-cell title="拾光悠味网红辣卷125g" is-link="true" label="	种类：豆干/豆制品	食用方法：打开即可食用" />
        <van-cell title="卫龙亲嘴烧麦辣鸡汁味28g" is-link="true" label="	卫龙亲嘴烧麦辣鸡汁味28g	产 地：河南毛重: 35克	种类：豆干/豆制品	食用方法：打开即可食用生产日期：2018-01	保质期：5个月" />
        <van-cell title="金大洲经典香辣味金针菇*100g 约5袋" is-link="true" label="	金大洲经典香辣味金针菇*100g 约5袋	口 味：香辣味   产 地：四川毛重: 100克	种类：竹笋/菌/菇	食用方法：打开即可食用生产日期：2017-09	储存方法：请置于阴凉干燥处，避光保存。" />
        <van-cell title="麦尚我不吹牛香辣味酱卤牛肉*100g 约6包" is-link="true" label="麦尚我不吹牛香辣味酱卤牛肉*100g 约6包	口 味：香辣味   产 地：浙江
毛重: 100克	种类：牛肉制品	食用方法：打开即可食用生产日期：2017-08	保质期：12个月	储存方法：请置于阴凉干燥处，避光保存" />
       </van-cell-group></van-tab>
    <van-tab title="坚果炒货">
      <van-cell-group>
        <van-cell title="佳栗福甘栗仁180g" is-link="true" label="
品牌: 佳粟福	佳栗福甘栗仁180g	产 地：河北
毛重: 200克	种类：栗子	
保质期：18个月"/>
        <van-cell title="馋食屋碧根果仁80g" is-link="true" label="品牌: 馋食屋	馋食屋碧根果仁80g	产 地：山东
毛重: 80克	种类：坚果	食用方法：打开即可食用
生产日期：2019-01	保质期：10个月	储存方法：请置于阴凉干燥处，避光保存。" />
        <van-cell title="亿莱旺炭烧腰果*500g 约8包" is-link="true" label="
品牌: 亿莱旺	亿莱旺炭烧腰果*500g 约8包	产 地：江苏
毛重: 500克	种类：坚果	食用方法：打开即可食用
生产日期：2018-11	保质期：6个月	储存方法：请置于阴凉干燥处，避光保存。" />
        <van-cell title="丽华核桃味瓜子*500g 约16袋" is-link="true" label="	丽华核桃味瓜子*500g 约16袋	产 地：天津
毛重: 500克	种类：瓜子	食用方法：打开即可食用
生产日期：2018-08	保质期：6个月	储存方法：请置于阴凉干燥处，避光保存。
丽华核桃味瓜子*500g 约16袋" />
      </van-cell-group>
    </van-tab>
    <van-tab title="饼干糕点">内容 3</van-tab>
    <van-tab title="膨化食品">内容 4</van-tab>
</van-tabs>
  </div>
</template>
<script>
  export default {
  data() {
    return {
      active: 0
    };
  }
}
</script>
<style scoped>
  .category >>> .van-tabs__line {
    background-color: #99f;
}
</style>