<template>
  <div id="app" >
    <transition name="fade">
    <div v-show="turn.top" id="top" style="width:100%;height:50px;background:rgba(0, 0, 0, 0.6);position:fixed;top:0;left:0;z-index:100;align-items:center;display:flex;">
      <keep-alive> <router-view name="top"></router-view>  </keep-alive>
    </div>
    </transition>

    <keep-alive><router-view></router-view></keep-alive>
    <router-view name="article"></router-view>
    <transition name="slideR"><router-view name="content"></router-view></transition>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      turn:{top:true},
    }
  },
  components: {

  },
  methods : {
    init(){
    },

    thetop () {
          let [a,b] = [0,0];

        $(window).scroll(_.debounce((e)=> {
          if(!this.$store.state.hideScroll){
          a = $(window).scrollTop()+1;
          if(a<b && !this.turn.top){this.turn.top = true; }
          if(a>b && this.turn.top &&$(window).scrollTop()>160) {this.turn.top = false;  };
          b = a;
          }
        },500,{leading:false,maxWait:100}));       

      }
  
  },
  created () {
    this.thetop();
  }

}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to{
  transform: translateY(-50px);
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all .5s;
}
.slide-enter, .slide-leave-to{
  transform: translateX(50vw);
}

.slideR-enter-active, .slideR-leave-active {
  transition: all .5s;
}
.slideR-enter, .slideR-leave-to{
  transform: translateX(100vw);
}



.topslide-enter-active, .topslide-leave-active {
  transition: all .5s;
}
.topslide-enter, .topslide-leave-to{
  transform: translateX(-75vw);
}
.aa-enter-active, .aa-leave-active {
  transition: all .5s;
}
.aa-enter, .aa-leave-to{
  transform: translateY(100vh);
  opacity: 0;
}

.content-center{
align-items: center;
display:flex;
}

.opcity-active, .opcity-leave-active {
  transition: all .5s;
}
.opcity-enter, .opcity-leave-to{
  opacity: 0;
}
a{
 text-decoration: none; 
}
</style>
