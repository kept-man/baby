<template>
	 <!-- 底部 -->
	<van-tabbar v-model="active" v-show="$root.bFoot">
	  <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
	  <van-tabbar-item icon="search">搜索</van-tabbar-item>
	  <van-tabbar-item icon="friends-o" to="/user">朋友</van-tabbar-item>
	  <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
	</van-tabbar>
</template>

<script>
	export default {
	  data() {
	    return {
	      active: 0,
	    };
	  },
	  watch:{
	    $route:{
	      handler(newVal){
	        let path = newVal.path;
	        if(/home|follow|column/.test(path)){
	          this.$root.bNav=true;
	          this.$root.bFoot=true;
	        }
	        if(/user/.test(path)){
	          this.$root.bNav=false;
	          this.$root.bFoot=true;
	        }
	        if(/login|reg|detail/.test(path)){
	          this.$root.bNav=false;
	          this.$root.bFoot=false;
	        }
	      },
	      immediate:true
	    }
	  },
	};
	
</script>

<style>
</style>
