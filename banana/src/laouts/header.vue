<template>
	<div>
		<!-- 顶部 -->
			<van-sticky v-show="$root.bNav">
				  <van-tabs v-model="active" >
				    <van-tab title="首页"  to="/"></van-tab>
					<van-tab title="关注"  to="/follow"></van-tab>
				    <van-tab title="栏目"></van-tab>
				  </van-tabs>
				  <!-- 搜索框 -->
				  <van-search
				    shape="round"
				    background="#fffff"
				    placeholder="搜一搜"
				  />
				</van-sticky>
			</div>
</template>

<script>
	export default{
		name:'top',
		data(){
			return{
				active: 3,
			}
		},
		watch:{
		  $route:{
		    handler(newVal){
		      let path = newVal.path;
		      if(/home|follow|column/.test(path)){
		        this.$root.bNav=true;
		        this.$root.bFoot=false;
		      }
		      if(/user/.test(path)){
		        this.$root.bNav=false;
		        this.$root.bFoot=true;
		      }
		      if(/login|reg|detail|user/.test(path)){
		        this.$root.bNav=false;
		        this.$root.bFoot=false;
		      }
		    },
		    immediate:true
		  }
		},
	}
</script>

<style>
	
</style>
