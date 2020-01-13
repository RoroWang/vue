import Vue from 'vue'
import App from '@/layouts/App.vue'

Vue.config.productionTip = false

//引入基础样式
import './assets/css/base.css'; // ~~ src ='...'

import './plugins/axios' 
import './config/template';

import date from './filters/date.js';
Vue.filter('date',date)
import fillzero from './filters/fillzero.js';
Vue.filter('fillzero',fillzero)

//引入字体比例校验 js   
import '@/assets/js/font.js' // ~~ src='..'

import router from './plugins/router.js'
new Vue({
  render: h => h(App),
  router,
  data:{
	  bNav:false,
	  bLoading:true,
	  bFooter:false,
  }
}).$mount('#app')
