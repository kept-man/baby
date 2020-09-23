//引入vue
import Vue from 'vue'
//引入路由包
import VueRouter from 'vue-router'//插件 ====》 类
//插件安装到vue上
Vue.use(VueRouter);


//跳转先引入
import Home from '../pages/home.vue'
import Login from '../pages/login.vue'
import Detail from '../pages/detail.vue'
import Nopage from '../pages/no-page.vue'
import Reg from '../pages/reg.vue'
import User from '../pages/user.vue'
import Follow from '../pages/follow.vue'




//路由配置 要的是一个数组
let routes = [
	// 一条路由的配置成为route 所有路由称为routes
	{path:'/home',component:Home},
	{path:'/login',component:Login},
	{path:'/detail/:_id',component:Detail,name:'detail'},
	{path:'/reg',component:Reg},
	{path:'/user',component:User},
	{path:'/follow',component:Follow},
	{path:'*',component:Nopage},
	{path:'/',redirect:'/home'},
]

//实例化路由实
let router = new VueRouter({ 
	routes,//要数组实例router 跳转
	mode:'history',
});


//全局守卫
//前置
// rotuer.beforeEach((to,from,next) => {
// 	if(to.path=='/login' || to.path=='/reg'){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// })






//暴露出去
export default router
