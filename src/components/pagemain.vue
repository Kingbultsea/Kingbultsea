<template>
  <div  :class='mystyle.zz'>
    
    <scroll></scroll>
    <galssycontent></galssycontent>
    <galssycontent></galssycontent>
    <galssycontent></galssycontent>
    <galssycontent></galssycontent>
    <galssycontent></galssycontent>
    <galssycontent></galssycontent>
    <galssycontent></galssycontent>
    <galssycontent></galssycontent>
    <galssycontent></galssycontent>
    <galssycontent></galssycontent>
    <Page :total="100" :style="{zIndex:'1',position:'relative',marginTop:'25px'}"></Page>
  </div>
</template>

<script>
import scroll from './Scroll'
import galssycontent from "./GlassyContent"
import { Page } from "iview"
export default {

  data () {
    return {
      test: 'i cant!'
    }
  },
  components: {
    scroll,
    galssycontent,
    Page
  }
}
</script>

<style module="mystyle">
.zz {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  
}
</style>