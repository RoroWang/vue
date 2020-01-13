import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from '../pages/home.vue'
import Follow from '../pages/follow.vue'
import Column from '../pages/column.vue'
import User from '../pages/user.vue'
import Reg from '../pages/reg.vue'
import Login from '../pages/login.vue'
import Detail from '../pages/detail.vue'
import NoPage from '../components/no-page.vue'

let routes=[
	{path:'/home',component:Home},
	{path:'/follow',component:Follow},
	{path:'/column',component:Column},
	{path:'/user',component:User},
	{path:'/reg',component:Reg},
	{path:'/login',component:Login},
	{path:'/detail/:id',component:Detail},
	{path:'/',redirect:'/home'},
	{path:'*',component:NoPage},
];

let router = new VueRouter({
	mode:'history',
	routes
});
export default router;