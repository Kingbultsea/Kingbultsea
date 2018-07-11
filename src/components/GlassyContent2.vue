<template>
<div :class="mystyle.outer">
<div class="content-center" :class="mystyle.first">
<img src="http://wx2.sinaimg.cn/mw690/006Zdy2vgy1frr1bopam5j313t1phakr.jpg">
</div>

<div :class="mystyle.second">
<div>l z s zhende shi low blow blow blow blow blow blow b </div>
</div> 
</div>
</template>
<script>
export default {
 
}
</script>

<style module="mystyle">
.outer{
width:94%;height:80vw;margin-left:3%;margin-right:3%;margin-top:5px;position:relative;background:rgba(255,255,255,0.9);z-index:1;overflow:hidden;
}
.first{
margin-top:3%;margin-left:3%;margin-right:3%;height:87%;overflow:hidden;
}
.first img{
width:100%
}
.second{
margin-top:3%;margin-left:3%;margin-right:3%;height:7%;overflow:hidden;border-top: 1px solid rgba(0,0,0,0.1);color:black
}
.second div{
width:100%;height:100%;overflow:hidden;
}
</style>