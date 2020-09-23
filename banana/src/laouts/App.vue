<template>
  <div id="app">
    <Top></Top>
	<router-view>展示区</router-view>
	
	
	<!-- <uc-cell :data="{_id:3,title:'xxx',des:'oo'}" collectionName="detail" isAdd @add-item="show"></uc-cell> -->

	<bot></bot>
	
  </div>
</template>

<script>
import Top from './header.vue'
import bot from './bot.vue'

export default {
  name: 'App',
  data(){
	  return{
		  list:[]
	  }
  },
  components: {
	Top,bot,
  },
  methods: {
	  show(ev){
		  console.log(ev);
	  }
  },
  
}
</script>

<style>

</style>
