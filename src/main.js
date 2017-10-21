import Vue from 'vue'
import App from './App.vue'

import Mint from 'mint-ui'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import moment from 'moment'

Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(VueResource)
import 'mint-ui/lib/style.css'
import './statics/mui/css/mui.css'
import './statics/css/site.css'

//导入组件
import home from './components/home/home.vue'
import category from './components/category/category.vue'
import shopcart from './components/shopcart/shopcart.vue'

import mine from './components/mine/mine.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'

Vue.filter('dateFmt',(input,dateFmtString)=>{
  const lastFmtString=dateFmtString | 'YYYY-MM-DD HH:mm:ss'
  return moment(input).format(lastFmtString)

})

const router = new VueRouter({
  routes:[
      {path:'/',redirect:'/home'},
      {path:'/home',component:home},
      {path:'/category',component:category},
      {path:'/shopcart',component:shopcart},
      {path:'/mine',component:mine},
      {path:'/news/newslist',component:newslist},
      {path:'/news/newsinfo/:newsId',component:newsinfo}
  ]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
