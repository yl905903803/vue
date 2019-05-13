<template>
  <div class="login">
    <van-icon name="friends-o" color="green" size="150px" class="friend"/>
    <van-cell-group>
  <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group>

<van-button type="primary" round="true" class="dl">登录</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username:"",
      password:""
    }
  },
}
</script>
<style scoped>
  .login >>> .van-cell--required::before {
    display:none;
  }
  .login >>> .van-cell-group{
    position:fixed;
    top:35%;
    left:5%;
    right:5%
  }
  .friend{text-align:centen;margin:50px 0;text-indent:50px}
  .dl{width:200px;height:50px;margin:100px 90px;}
</style>