<template>
	<div class="uc-cell">
		<!-- 点击这个div 判断是否有集合名  -->
		<div @click="toDetail">
			<h2><span v-show="index != null">{{index + 1}}.</span>{{data.title}}</h2>
			<p>{{data.des}}</p>
			<!-- 看看对面传不传值，传了的话 就触发自定义事件 -->
			<a class="cell__anchor" v-if="isAdd" href="javascript:;" @click.stop="$emit('add-item',$event)">+</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'uc-cell',
		props:{
			//接受个对象里面有很多信息
			data:{
				type:Object,
				required:true
			},
			//传集合名
			collectionName:{
				type:String,
				default:null
			},
			//传索引
			index:{
				type:Number,
				default:null
			},
			//又测的东西
			isAdd:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			toDetail(){
				if(this.collectionName){
					// 编程式跳转
					this.$router.push(`/detail/1?collectionName=${this.collectionName}`)
				}
			}
		}
	}
</script>

<style>
  .uc-cell{position: relative;}
  .uc-cell:active {background: #ccc;}
  .uc-cell div { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
  .uc-cell div h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
  .uc-cell div p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
  .cell__anchor{position:absolute;right:0.3rem;top:0.4rem;}
</style>
