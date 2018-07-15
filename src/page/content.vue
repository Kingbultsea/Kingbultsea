
<script>
import Loading from "../components/justfortest.vue"
export default {
  data(){
   return {
     ready:false

    }


    },
    methods : {
      haveReady () {
      
        }
      },
    components:{ 
    Loading
    },
    mounted () {
    
    },
    render(){
      let _vm = this;
      let _c = _vm.$createElement;
      return _c('div',{class:['hh']})
    }
}
</script>

<style module="mystyle">
.main{
width:100%;height:100%;position:fixed;top:0;z-index:10;background:#fff;z-index:13;
}
</style>
