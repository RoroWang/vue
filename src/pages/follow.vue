<template>
  <div class="follow">
    <UcCell
	 v-for = '(item,index) of list'
	 :key = 'item._id'
	 :data ='item'
	 :data-name = "'follow'"
	 :index = 'index'
	></UcCell>
  </div>
</template>

<script>
	import UcCell from '../components/uc-cell.vue'
  export default {
	  name:'follow',
    data(){
		return {
			list:[]
		}
	},
    components:{
		UcCell
	},
    mounted(){
    	this.$axios({
    		url:'api/follow',
    		params:{_page:1,_limit:6}
    	}).then(
    		res=>this.list = res.data.data
    	)
    },
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .follow{margin-top: 0.35rem;}
</style>
