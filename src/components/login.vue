<template>
<div :class="mystyle.main">

<div :class="[mystyle.profile,{proanimation:$data.succeed}]">
<img  src="http://wx3.sinaimg.cn/mw690/006Zdy2vgy1fsz1314b3jj30a00a0td9.jpg">
</div>

<transition name="login-motation" mode="out-in">
<div v-if="!$data.succeed" :class="mystyle.loginall" key="1">
 <div :class="mystyle.qq">
 <Input v-model='$data.qq'></Input>
 </div>


 <div :class="mystyle.password">
 <Input v-model='$data.password'></Input>
 </div>

 <div :class="mystyle.submit">
 <Button  type="info" long @click="  submitLogin">登陆</Button>
 </div>
</div>
<div  v-else  :class="mystyle.user" key="2">
 <div :class="mystyle.userdata">
   <div>
    <p>用户名称:</p> 
    <p>上次登陆:</p>
    <p>我的兴趣:</p>
   </div>
    
    <div>
    <p>hodor</p> 
    <p>{{$data.loginTime}}</p>
    <p>aa</p>
   </div>
 </div>

  
  <div :class="mystyle.collect">
    <p style="width:100%;margin-left:10px;">浏览历史:</p>
    <div v-for="li in $data.list">zz</div>
  </div>
</div>
</transition>


</div>

</template>
<script>
import { Input,Button } from "iview"
import mystore from "../vuex/userData.js"

export default {
  data(){
    return {
      succeed:false,
      list:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      qq:'',
      password:'',
      loginTime:new Date()
    }
  },
  methods:{
    submitLogin(){
      this.$store.commit('setLogin',{qq:this.$data.qq.trim(),password:this.$data.password.trim()})
      this.$data.succeed = !this.$data.succeed;
    }
  },
  components:{ Input,Button },
  mounted(){
    if(this.$store.state.qq){ this.$data.succeed = !this.$data.succeed; }
    
  },
  mystore
}
</script>

<style module="mystyle" lang="scss">


.main{
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  color:rgba(255,255,255,0.8);
}

.size{
  width:80%;
  height:60px;
}

.profile{

 height:100px;width:100%;
 display:flex;
 align-items:center;
 justify-content:center;
 margin-top:50%;
  img{
$size:64px;
$color:60;
    box-sizing:border-box;
    width:$size;
    height:$size;
    border:3px solid rgba($color,$color,$color,0.8);
    border-radius:$size;

  }
}


.qq{
@extend .size;
}

.password{
@extend .size;
}

.submit{
@extend .size;
}

.loginall{
width:100%;
display:flex;
flex-direction:column;
align-items:center;

}

.user{
 width:100%;
 height:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
  .userdata{
     width:80%;
     display:flex;
     justify-content:space-around;
  }
  .collect{
     width:100%;
     height:65vh;
     display:flex;
     padding-top:10%;
     flex-wrap:wrap;
     align-content:flex-start;
     
     overflow:scroll;
       div{
         $width:100%; $height:64px;
         width:$width;
         height:$height;
         overflow:hidden;
         margin:3px;
           img{ height:$height;width:64px; }
       }
  }
}





</style>
<style lang="css">
.login-motation-enter-active {
  transition: all .5s;
}
.login-motation-leave-active {
  transition: all .5s ;
}
.login-motation-enter, .login-motation-leave-to
/* .slide-fade-leave-active 在低于 2.1.8 版本中 */ {
  //transform: translateY(10px);
  opacity: 0;
}

.proanimation{
-webkit-animation: profilemove 1s;
-webkit-animation-fill-mode:forwards;
}


@-webkit-keyframes profilemove
{
	from {margin-top:50%;}
	to {margin-top:10%;}
}


</style>

