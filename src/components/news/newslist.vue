<template>
  <div class="mui-content">
      <ul class="mui-table-view">
          <li v-for="item in newslist" :key="item.id" class="mui-table-view-cell nui-media">
           <router-link :to="'/news/newsinfo/'+item.id">
               <img :src="item.img_url" class="mui-media-object mui-pull-left">
               <div class="mui-media-body">
                   <p class="titleStyle">{{item.title}}</p>
                   <p class="mui-ellipsis">
                       <span>{{item.add_time| dateFmt('YYYY-MM-DD HH:mm')}}</span>
                       <span>点击数{{item.click}}次</span>
                   </p>

               </div>
           </router-link>

          </li>
      </ul>
      
  </div>
</template>

<style scoped>
  .mui-table-view-cell{
    height: 80px;
  }

  .mui-table-view-cell .mui-pull-left{
    min-width:65px;
    height: 65px;
  }

  .titleStyle{
    font-size: 14px;
    color: gray;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mui-ellipsis{
    margin-top: 20px;
    color: #0094ff;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
</style>


<script>
    import common from '../../common/common.js'

    export default{
        data(){
            return{
                newslist:[]
            }
        },
        created(){
            this.getNewsListData()
        },
        methods:{
            getNewsListData(){
                const url=common.apihost+'api/getnewslist'
                this.$http.get(url).then(response=>{
                    console.log(response)
                    this.newslist=response.body.message

                    
                },err=>{
                    console.log(err)
                })
            }
        }
    }
</script>