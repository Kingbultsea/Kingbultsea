

<template>
<div class="swiper-container my-swiper" style="z-index:6;width:100%;height:60vw;">
    <div class="swiper-wrapper" >
        <div class="swiper-slide my-swiper-div" :class="mystyle.one" ><img src="http://wx3.sinaimg.cn/mw690/006Zdy2vgy1frvt0sktl5j31hc0u0e82.jpg" style="width:100%;"></div>
        <div class="swiper-slide my-swiper-div" :class="mystyle.one"><img src="http://wx1.sinaimg.cn/mw690/006Zdy2vgy1frzprkg7rjj32gw1es7te.jpg" style="width:100%;"></div>
        <div class="swiper-slide my-swiper-div" :class="mystyle.one"><img src="http://wx4.sinaimg.cn/mw690/006Zdy2vgy1frvt0yn0hej31hc0u0k6x.jpg" style="width:100%;"></div>
    </div>
       </div>
</template>
<script>



export default {
  data () {
   return{
     test:''
         }
  },
  components : {

  },
  methods: {
    start () {

    }
  },
  mounted () {
    let myscroll = new Swiper ('.my-swiper',{


    speed : 1000,
    effect : 'fade',
    fadeEffect: {
    crossFade: false,
    },
    loop: true,
    autoplay: {
    delay: 8000,
    stopOnLastSlide: false,
    disableOnInteraction: true
    },
    on:{
    transitionEnd: function(event){
     if(!this.autoplay.running)this.autoplay.start();
        }
    }
      });

  }
}
</script>
<style module="mystyle">
.one{
 background-size:  100% 100%;align-items:center;display:flex;
 overflow:hidden;
// box-shadow: 10px 10px 5px rgba(0,0,0,0.2);
}

</style>