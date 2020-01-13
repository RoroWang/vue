<template>
  <div class="column">
    <UcCell
     v-for = '(item,index) of list'
     :key = 'item._id'
     :data ='item'
     :data-name = "'column'"
     
    ></UcCell>
		
	</ucCell>
  </div>
</template>

<script>
	import UcCell from '../components/uc-cell.vue'
  export default {
	  name:'column',
    data(){return {
      list:[]
    }},
    components:{
      UcCell
    },
    mounted(){
    	this.$axios({
    		url:'api/column',
    		params:{_page:1,_limit:3}
    	}).then(
    		res=>this.list = res.data.data
    	)
    },
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .column{
    margin-top: .4rem;
  }
</style>
