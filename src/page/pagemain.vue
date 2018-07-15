<template>


<div  :class='mystyle.zz'>

    <scroll></scroll>



  <div  class="swiper-container pagemain-swiper-container" style="margin-bottom:50px;z-index:4">
    <div :class="mystyle.parallax" style="" data-swiper-parallax="-23%">
<img src="http://wx3.sinaimg.cn/large/006Zdy2vgy1fs31w3mjz2j31ck0sn1i6.jpg" id='pagemainHeight' style="float:left;position:absolute:left:0;top:0">
    </div>
    <div class="swiper-scrollbar pagemain-swiper-scrollbar" style="top:5px"></div>
    <div class="swiper-wrapper" >
<contentGlassyAnd v-bind:lis="lis"></contentGlassyAnd>
<contentGlassyAnd v-bind:lis="lis"></contentGlassyAnd>
<contentGlassyAnd v-bind:lis="lis"></contentGlassyAnd>
<contentGlassyAnd v-bind:lis="lis"></contentGlassyAnd>
<contentGlassyAnd v-bind:lis="lis"></contentGlassyAnd>
    </div>
  </div>



</div>

</template>

<script>
const scroll = () => import ('../components/Scroll');
import { Page } from "iview"
import contentGlassyAnd from "../components/contentGlassyAnd2"
//vuex不能异步 上面那个组件contentGlassyAnd2 也不能异步，因为异步了mounted先运行的，然后你swiper的就取不到完整的demo就失败了



export default {

  data () {
    return {
      lodashOnece:_.once(this.swiper),
      test: 'i cant!',
      transitionName:'',
      lis:[0,0,0,1,0,0,0,0,0,0,0,0],
      paginationURL:['http://wx4.sinaimg.cn/large/006Zdy2vgy1frycou5uzsj302l02b74g.jpg',
'http://wx4.sinaimg.cn/mw690/006Zdy2vgy1frycow7z4oj304804gt9r.jpg',
'http://wx2.sinaimg.cn/mw690/006Zdy2vgy1frycovbf8cj304z0553zu.jpg',
'http://wx3.sinaimg.cn/mw690/006Zdy2vgy1frycouipnpj305e05e405.jpg',
'http://wx3.sinaimg.cn/mw690/006Zdy2vgy1frycowtygoj305c05lq4m.jpg']   
    }
  },
  props:[],
  components: {
    scroll,
    Page,
    contentGlassyAnd
  },
  methods:{
    init(){
      let height = document.documentElement.clientHeight;
      this.swiper();
    },
    animateSet(to,form){
      let a =  _.last( to.path.split('/')   );
      a === "sideleft" ? this.transitionName ="fade"  :a;
      
    },
    swiper(){
      let that = this;
      let a = new Swiper('.pagemain-swiper-container',{
        hashNavigation: true,
        scrollbar: {
          el: '.pagemain-swiper-scrollbar'
        },
        parallax: true,
        initialSlide :that.$store.state.initialSlide,
        on: {
          slideChangeTransitionEnd: function(){
          that.$store.commit('setInitialSlide',this.activeIndex);
        }
        }
      }); 
      a.scrollbar.$dragEl.css('background','rgba(0,0,0,0.5)');
    }
  },
  watch:{
    '$route'(to,form){
      this.animateSet(to,form);
    }
  },
  mounted(){
    this.init();
  }
  

}
</script>

<style module="mystyle">
.zz {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //background-color:green;
}
.parallax {
      position: fixed;
      left: -50%;
      top: 0;
      width: 600%;
      height: 100%;
      background-position: center;
      background-origin: content-box;
    }

</style>
<style>

</style>