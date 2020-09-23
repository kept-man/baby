<template>
	<div class="reg">
		<h2 class="reg-s">注册账号</h2>
		<form>
			<uc-input type="text" label="用户名" v-model="username"></uc-input>
			<uc-input type="text" label="账号" v-model="zh"></uc-input>
			<uc-input type="password" label="密码" v-model="password"></uc-input>
			<uc-input type="Number" label="手机号" v-model="iphone"></uc-input>
			<uc-input type="Number" label="验证码" v-model="yzm"></uc-input>
			
			<!-- Vant -->
			<van-field readonly required clickable label="选择地区" :value="valueArea" placeholder="请选择所在地区" @click="bindShow" />
			 
			        <!--选择省市区-->
			        <van-popup v-model="showArea" position="bottom" :style="{ height: '40%' }">
			            <van-area :area-list="areaList" @confirm="onAreaConfirm" @cancel="bindCancel" />
			        </van-popup>
			<div class="zhu" @click="jiao">注册</div>
			
		</form>
	</div>
</template>

<script>
	import UcInput from '../components/uc-input/index.vue'
	import AeraInfo from "../common/area.js"
	import { Dialog } from 'vant';
	export default{
		name:'reg',
		props:{
			
		},
		data(){
			return{
				username:'',
				password:'',
				show:false,
				areaList: AeraInfo, //引用地区信息
				showArea: false,
				valueArea: '', //地区值
				arrArea: [], //存放地区数组
				zh:'',
				iphone:'',
				yzm:'',
			}
		},
		components:{
			UcInput,
		},
		methods:{
			showPopup(){
				this.show = true;
			},
			bindShow(){
			            this.showArea= true;
			        },
			        bindCancel(){
			            this.showArea= false;
			        },
			        //地区选择
			        onAreaConfirm(val) {
			            this.showArea = false;
			            this.arrArea = val;
			            var addrInfo = val[0].name + '-' + val[1].name + '-' + val[2].name;
			            this.valueArea = addrInfo
			        },
					jiao(){
						if(this.username.length===0||this.zh.length===0||this.password.length===0||this.iphone.length===0||this.yzm.length===0||this.valueArea.length===0){
							Dialog({ message: '内容不能为空' });
				}else if(!(/^[一-龥A-Za-z0-9]+$/.test(this.username))){
					Dialog({ message: '用户名错误' });
				}else if(!(/^[A-Za-z0-9]+$/.test(this.password))){
					Dialog({ message: '密码错误' });
				}else if(!(/^[A-Za-z0-9]+$/.test(this.zh))){
					Dialog({ message: '账号错误' });
				}else if(!(/^[0-9]*$/.test(this.iphone))){
					Dialog({ message: '手机号错误' });
				}else if(!(/^[0-9]*$/.test(this.yzm))){
					Dialog({ message: '验证码错误' });
				}	
									
				this.$router.push('/login');
			}
		}
	}
</script>

<style scoped>
	.reg-s{
		text-align: center;
		font-size: .5rem;
		color: lavenderblush;
	}
	.zhu{
		width: 4.65rem;
		height: 0.65rem;
		background: #4c4f50;
		color: #fff;
		text-align: center;
		line-height: 0.65rem;
		border-radius: 8px;
		display: block;
		font-size: 0.28rem;
		margin: 0 auto;
	}
	
</style>
