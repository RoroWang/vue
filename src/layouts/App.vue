<template>
  <div id="app">
	  <!-- <loading v-show="this.$root.bLoading"></loading> -->
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
 import Home from '../pages/home.vue'
 import Header from './header.vue'
 import Footer from '@/layouts/footer.vue'
 import loading from '@/components/loading.vue'
  export default{
	  name:'App',
    components:{
      Home,Header,Footer,loading
    }
  }
</script>
<style>
  
</style>
