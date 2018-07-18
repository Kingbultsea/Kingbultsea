<template>
<transition name="fade" mode="in-out">
<div class="top">

<div class="topbar">
  <div class="topleft">
    <p>Article</p>
  </div>
  <ul class="topright">
    <li class="active">all</li>
    <li>类型a</li>
    <li>类型b</li>
    <li>类型c</li>
  </ul>
</div>

<div>
<router-link v-for="(li,index) in lis" :to="{path:'content',query:{plan:index} }" :key="index">
<Article  style="position:relative"    :class="mystyle.firstarticle"    :title="li.title"  :comment="li.comment"  :time="li.time"  :reply="li.reply"  :pictureUrl="li.pictureUrl"></Article>
</router-link>
</div>

<Page></Page>


</div>
</transition>
</template>
<script>
import Article from "../components/Article.vue"
import Page from "../components/pageslice.vue";
export default {
  data(){
  return {
	
    lis:[{title:'如如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果如果果',comment:'可是这样和死了有什么区别...',time:'2018年6月28日',reply:'125',pictureUrl:'http://wx1.sinaimg.cn/mw690/006Zdy2vgy1frzprkg7rjj32gw1es7te.jpg'},
{title:'琉璃神社壁纸包2018年5月号',comment:'就是就是就是收集了很多东西了...',time:'2018年6月28日',reply:'999',pictureUrl:'http://wx3.sinaimg.cn/mw690/006Zdy2vgy1frvt0sktl5j31hc0u0e82.jpg'},
{title:'琉璃神社壁纸包2018年5月号',comment:'就是就是就是收集了很多东西了...',time:'2018年6月28日',reply:'999',pictureUrl:'http://wx3.sinaimg.cn/mw690/006Zdy2vgy1frvt0sktl5j31hc0u0e82.jpg'}]
    }
  },
  components:{
    Article,Page
  }
}
</script>
<style scoped>
.top{
  width:100%;
  padding-top:50px;
  z-index:9;
  position:relative;
  background:#eee;
}
.topbar{
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  background:rgba(255,255,255,0.5);
}
.topleft{
  padding:10px;
  width:10vw;
}
.topleft p {
  font-size:1rem;
  width:60px;
  text-align:center;
  box-sizing:border-box;
  border-bottom: 3px solid rgba(163,54,81,0.5);
}
.topright{
  list-style-type: none;
  overflow:hidden
}
.topright li{
float:left;
padding:10px;
}
.active{
 color: rgba(200,0,0,0.9);
}


</style>

<style module="mystyle">
.firstarticle:first-child{

}
</style>

<style lang="scss" scoped type="text/css">
.top{
  p {

  }
}
</style>
