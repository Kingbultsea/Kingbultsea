<template>
<div style="width:100%;margin-top:3%" class="swiper-slide">
<div style="width:50%;float:right;position:relative;right:1%;">
    <div v-for="(li,index) in mylis"  >
    <router-link v-if="index%2 == 0" :to="{path:'content',query:{a:index}}"><glassycontent2></glassycontent2></router-link>
    <router-link v-else to="/content"><glassycontent></glassycontent></router-link>
    </div>
</div>

<div style="width:50%;float:left;position:relative;left:1%;">
    <div v-for="(li,index) in mylis"  >
    <router-link v-if="index%2 == 0" to="/content"><glassycontent></glassycontent></router-link>
    <router-link v-else to="/content"><glassycontent2></glassycontent2></router-link>
    </div>
</div>

</div>
</template>
<script>

const glassycontent = () => import ('../components/GlassyContent');
const glassycontent2 = () => import ('../components/GlassyContent2');


export default {
  props:["lis"],
  data(){
    return {
      mylis:this.lis
      }
  },
  components:{
  glassycontent2,
  glassycontent
  }
}
</script>