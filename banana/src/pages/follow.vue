<template>
	<div class="follow">
		<uc-cell
		  v-for="(item,index) of list"
		  :key="item._id"
		 :data="item" 
		 :index="index" 
		 collectionName="home"
		 />
	</div>
</template>

<script>
	import axios from '../plugins/axios.js'
	import UcCell from '../components/uc-cell/uc-cell.vue'
	export default{
		name:'follow',
		data(){
			return{
				list:[]
			}
		},
		props:{
			
		},
		components:{
			UcCell
		},
		mounted(){
			this.$axios({
				url:'api/home',
				params:{_limit:5,_page:2}
			}).then(res => {
				this.list = res.data.data;
				console.log(this.list)
			})
		}
	}
</script>

<style>
	.follow{
		padding:0 0.34rem
		}
</style>
