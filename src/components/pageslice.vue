<template>

<div :class="mystyle.main">
<Page :current="2" :total="50" simple></Page>
</div>

</template>
<script>
import {Page} from "iview"

export default {
  components:{
	  Page
  }
}
</script>

<style  lang="scss" module="mystyle">
.main{
	padding-top:30px;
	padding-bottom:30px;
	width:100%;
	display:flex;
	justify-content:center;
}

</style>