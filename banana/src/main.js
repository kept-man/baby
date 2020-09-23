import Vue from 'vue'
import App from './laouts/App.vue'

Vue.config.productionTip = false

import './assets/css/base.css';// ~~ src
import './assets/js/font.js';//字体比值控制

//引入拦截器
import './plugins/axios'

//引入路由 输入router实例
import router from './plugins/router.js'

//标签页
import { Tab, Tabs } from 'vant'
Vue.use(Tab);
Vue.use(Tabs);


//搜索框
import { Search } from 'vant';
Vue.use(Search);

//通知栏
import { NoticeBar } from 'vant'
Vue.use(NoticeBar)

//吸顶
import { Sticky } from 'vant';
Vue.use(Sticky);

//轮播
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);



//tab标签栏
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);

//骨架屏
import { Skeleton } from 'vant';
Vue.use(Skeleton);

//弹出层
import { Popup } from 'vant';
import { Cell } from 'vant';
Vue.use(Popup);
Vue.use(Cell);

//省市选择
import { Area } from 'vant';
import {Field} from 'vant';
Vue.use(Area);
Vue.use(Field);

let vm = new Vue({
  render: h => h(App),
  router,
  data:{
	  bNav:false,
	  bFoot:true,
	  bLoading:true
  }
}).$mount('#app')

export default vm;
