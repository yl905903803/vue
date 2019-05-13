<template>
  <div class="ShoppingCart">
   <van-icon name="arrow-left" size="2em" class="a-left" @click="back"/>
<van-card
  num="2"
  tag="热卖"
  price="12.00"
  desc="............"  
  title="小时光辣棒"
  :thumb="imageURL"
  origin-price="20.00"
>
  <div slot="footer">
    <van-button size="mini" @click="add">+</van-button>
    <van-button size="mini">-</van-button>
  </div>
</van-card>
<van-card
  num="2"
  tag="热卖"
  price="12.00"
  desc="............"  
  title="小时光辣棒"
  :thumb="imageURL"
  origin-price="20.00"
>
  <div slot="footer">
    <van-button size="mini" @click="add">+</van-button>
    <van-button size="mini">-</van-button>
  </div>
</van-card>
<van-card
  num="2"
  tag="热卖"
  price="12.00"
  desc="............"  
  title="小时光辣棒"
  :thumb="imageURL"
  origin-price="20.00"
>
  <div slot="footer">
    <van-button size="mini" @click="add">+</van-button>
    <van-button size="mini">-</van-button>
  </div>
</van-card>


  </div>
</template>
<script>
export default {
  data() {
    return {
      imageURL:['/assets/img/card.jpg']
    }
  },
  methods: {
    back(){this.$router.go(-1)}
  },
}
</script>
<style scoped>
.a-left{
  margin-top:.5em;
}
</style>