<template>

<div class="main">

<h2 >{{title}}</h2>
<img class="myimg setwidth" :src="pictureUrl">
<div class='mytime'><Icon type="ios-clock-outline"></Icon>  {{time}}  <Icon type="chatbox"></Icon> :0</div>
<div class='mycomment'>{{comment}}</div>
<div class="listLeft"></div>
</div>

</template>
<script>
import { Icon } from 'iview';
export default {
  props:['title','time','reply','comment','pictureUrl'],
  components:{
    Icon
  }
}
</script>

<style scoped>
.main{
	background:rgba(255,255,255,0.8);
  width:100%;
  overflow:hidden;
  display:flex;
  align-items: flex-start;
  justify-content:center;
  flex-wrap:wrap;
 // background:rgba(255,255,255,0.8);
  margin-top:5px;
  padding:20px 5px 0px 5px;
  font-family:KaiTi;
}


.main h2{
  
  width:90%;
  overflow:hidden;
  word-wrap:break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family:Heiti;
  line-height:initial;
  
  //box-sizing:border-box
  
}
.myimg{
 margin-top:10px;
 width:90%;
}
.mytime{
 width:90%;
 padding:10px;
 text-align:right;
}
.mycomment{
	
 width:90%;
 padding:10px;
 text-align:right;
}
.listLeft{
	position:absolute;
	left:0px;
    top:5px;
	padding:9px;
	background:pink;
}
</style>


