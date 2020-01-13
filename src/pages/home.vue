<template>
  <div class="home">
    <Banner :data="banner" dataName="banner" />
	<router-link
		v-for="(item,index) of list"
		:key='item._id'
		:to="`/detail/${item._id}?dataName=home`"
	>
		<uc-cell :isJump = 'false' :data="item" :index='index'/>
	</router-link>
  </div>
</template>

<script>
  import Banner from '@/components/banner.vue'
  import UcCell from '@/components/uc-cell.vue'
  
  export default {
	  name:'home',
    data(){
      return {
		  list:[],
		  banner:[]
	  }
    },
    components:{
      Banner,
      'uc-cell':UcCell
    },
    mounted(){
		this.$axios({
			url:'api/home',
			params:{_page:1,_limit:5}
		}).then(
			res=>this.list = res.data.data
		),
		this.$axios({
		  url:'/api/banner',
		  params:{_page:1,_limit:3}
		}).then(
		  res=>this.banner=res.data.data
		)
	},
    updated(){},
    methods:{}
  }
</script>

<style>
</style>

 