<template>
  <div>
     <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,index) in lunboArray" :key="index">
            <a :href="item.url">
                <img :src="item.img">
            </a>
        </mt-swipe-item>
      </mt-swipe>


       <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/news/newslist">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
 
 <style scoped>
  .mint-swipe{
    height: 250px;
  }

  img{
    width:100%;
    height: 250px;
  }

  .mint-swipe-indicator.is-active {
    background: #f44336;
  }

  .mint-swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #4caf50;
    opacity: 1;
    margin: 0 3px;
}
 
  .mui-grid-view.mui-grid-9{
    background-color: #ffffff;
    border: 0px;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
     border: 0px;
  }

  .mui-icon{
    width: 50px;
    height: 50px;
  }

  .mui-icon-home:before,
  .mui-icon-email:before,
  .mui-icon-chatbubble:before,
  .mui-icon-location:before,
  .mui-icon-search:before,
  .mui-icon-phone:before{
    content:'';
  }

  .mui-icon-home{
    background-image: url(../../statics/images/menu3.png);
    background-size: cover;
  }

  .mui-icon-email{
    background-image: url(../../statics/images/menu4.png);
    background-size: cover;
  }

  .mui-icon-chatbubble{
    background-image: url(../../statics/images/menu5.png);
    background-size: cover;
  }

  .mui-icon-location{
    background-image: url(../../statics/images/menu6.png);
    background-size: cover;
  }

  .mui-icon-search{
    background-image: url(../../statics/images/menu9.png);
    background-size: cover;
  }

  .mui-icon-phone{
    background-image: url(../../statics/images/menu10.png);
    background-size:cover；
  }
 </style>
 


<script>
import common from '../../common/common.js'


    export default{
     data:function(){
         return {
             lunboArray:[]
         }
     },
     created(){
     this.getLunboData()

     },
     methods:{
         getLunboData:function(){
             console.log("welcome")
             const url="http://vue.studyit.io/api/getlunbo"
             this.$http.get(url).then(response=>{
                this.lunboArray=response.body.message
             },err=>{
                 console.log(err)
             })
         }
     }
    }
</script>