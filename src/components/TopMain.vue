

<template>

<div :class="mystyle.main">
<img @click="setTurn(true)"  src="../assets/Category.svg" :class="mystyle.left">


<transition name="opcity">    
<div v-show="this.$data.trun" style="width:100vw;height:100%;position:fixed;left:0;top:0;z-index:999">

<div style="background:rgba(0,0,0,0.7);width:75vw;height:100%;position:absolute;left:0;top:0;display:flex;align-items:flex-start;overflow:hidden;">
<Login></Login>
</div>

<div @click="setTurn(false)" style="background:rgba(0,0,0,0.1);width:25vw;height:100%;position:absolute;right:0;top:0;"></div>
</div>
</transition>
     <div :class="mystyle.rightContent">
    <miao v-model="$data.switch" :class="mystyle.right" @on-change="anotherStyle" size="small">
    </miao>
     </div >
</div>

</template>
<script>
import {Switch} from "iview"
const Login = ()=> import ('./login')

export default {
  data(){
    return {
      trun:false,
      switch:true
      }
    },
  components:{miao:Switch,Login},
  methods:{
    setTurn(boolean){
       this.$store.state.hideScroll = boolean;
       this.$data.trun = boolean;
     if(boolean) document.body.style.overflow="hidden";//  $('.html').css('position','fixed');   // 
       else document.body.style.overflow="";// $('.html').css('position','static');   // 
       
    },
    anotherStyle(){
       if(  this.$router.history.current.path.startsWith('/article')  ){ this.$router.push({path:'/home'}); }
       else if(  this.$router.history.current.path.startsWith('/home')  )  {this.$router.push({path:'/article'}); }
    }
  }
}
</script>

<style lang="scss" module="mystyle">
$margin:10px;
.main{
display:flex;
justify-content:space-between;
width:100%;
overflow:hidden;
}

.widthandheight{
width:32px;
height:32px;
}

.left{
@extend .widthandheight;
margin-left:$margin;
}
.rightContent{
@extend .widthandheight;
display:flex;
align-items:center;
}
.right{
margin-right:$margin;
background-color:rgba(250,45,0,0.5);
}
</style>

<style>
.ivu-switch-checked{
background-color:rgba(0,45,0,0.9) !important;
}
</style>