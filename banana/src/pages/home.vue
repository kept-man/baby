<template>
	<div>
		<!-- 广播 -->
		<van-notice-bar scrollable text="Vue 也太难学了。" />
		
		<!-- 轮播图 -->
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		  <van-swipe-item>1</van-swipe-item>
		  <van-swipe-item>2</van-swipe-item>
		  <van-swipe-item>3</van-swipe-item>
		  <van-swipe-item>4</van-swipe-item>
		</van-swipe>
		
		
		<!-- 列表 -->
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
	import UcCell from '../components/uc-cell/uc-cell.vue'
	export default {
		name:'home',
		data(){
	    return {
			list:[]
	    }
	  },
	  components:{
		  UcCell,
	  },
	  mounted(){
		this.$axios({
			url:'/api/home',
			params:{_limit:20,_page:1}
		}).then(res => {
			this.list = res.data.data;
			console.log(this.list);
		})
	  },
	};
</script>

<style>
	.my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    line-height: 150px;
	    text-align: center;
	    background-color: #39a9ed;
	  }
</style>
