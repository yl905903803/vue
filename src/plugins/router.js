import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import home from '../pages/home.vue';
import category from '../pages/category.vue';
import detail from '../pages/detail.vue';
import user from '../pages/user.vue';
import login from '../pages/login.vue';
import reg from '../pages/reg.vue';
import ShoppingCart from '../pages/ShoppingCart.vue';
import error from '../pages/error.vue';


let routes = [
  {path:'/home',component:home},
  {path:'/category',component:category},
  {path:'/detail',component:detail},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/user',component:user},
  {path:'/ShoppingCart',component:ShoppingCart},
  {path:'/',redirect:'/home'},
  {path:'*',component:error},
];

let router = new VueRouter({routes});

export default router;