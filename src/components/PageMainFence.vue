<template>
<div class="swiper-container my-swiper2" style="width:100%;margin-bottom:1px;overflow-y:hidden">
    <div class="swiper-wrapper" >
        <div class="swiper-slide my-swiper-div"  :class="mystyle.one" >
<div  style="width:64px;height:64px;border-radius:32px;background:url(http://wx4.sinaimg.cn/large/006Zdy2vgy1frycou5uzsj302l02b74g.jpg);margin:0 auto;background-size: 100%;"></div>
<div  style="width:64px;height:64px;border-radius:32px;background:url(http://wx4.sinaimg.cn/mw690/006Zdy2vgy1frycow7z4oj304804gt9r.jpg);margin:0 auto;background-size: 100%;"></div>
<div  style="width:64px;height:64px;border-radius:32px;background:url(http://wx2.sinaimg.cn/mw690/006Zdy2vgy1frycovbf8cj304z0553zu.jpg);margin:0 auto;background-size: 100%;"></div>
<div  style="width:64px;height:64px;border-radius:32px;background:url(http://wx3.sinaimg.cn/mw690/006Zdy2vgy1frycouipnpj305e05e405.jpg);margin:0 auto;background-size: 100%;"></div>
<div  style="width:64px;height:64px;border-radius:32px;background:url(http://wx3.sinaimg.cn/mw690/006Zdy2vgy1frycowtygoj305c05lq4m.jpg);margin:0 auto;background-size: 100%;"></div>
</div>
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
    let myscroll = new Swiper ('.my-swiper2',{


    speed : 1000,
    autoplay: {
    delay: 3000,
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
text-align:center;
 overflow:hidden;
// box-shadow: 10px 10px 5px rgba(0,0,0,0.2);
}

</style>