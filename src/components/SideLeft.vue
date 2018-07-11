<template>
<div style="width:100vw;height:100%;position:fixed;left:0;top:0;z-index:999">

<div style="background:rgba(0,0,0,0.7);width:75vw;height:100%;position:absolute;left:0;top:0;"></div>
<div onclick="history.back()" style="background:rgba(0,0,0,0.1);width:25vw;height:100%;position:absolute;right:0;top:0;"></div>

</div>
</template>
<script>
export default {
  mounted(){
   
  },
  beforeRouteEnter (to, from, next) {
    document.body.style.overflow="hidden";
    next()
  },
  beforeRouteLeave (to, from, next) {
    document.body.style.overflow="";
    next()
  }
}
</script>