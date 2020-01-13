<template>
  <div class="uc-cell" @click="getDetail">
    <h2><span v-show="index!=null">{{index+1 | fillzero}}.</span>{{data.title}}</h2>
	<img :src="$baseUrl+ data.banner"/>
    <p>{{data.des}}</p>
  </div>
  
</template>


<script>
  export default {
    data(){return {}},
	props:{
		data:{
			type:Object,
			default:function(){
			  return {}
			}
		},
		dataName:{
			type:String,
			default:null
		},
		index:{
		  type:Number,
		  default:null
		},
		isJump:{
		  type:Boolean,
		  default:true
		}
	},
    components:{},
    mounted(){},
    updated(){},
    methods:{
		getDetail(){
		  //                            '/detail/234234234?dataName=home'
		  this.isJump && this.$router.push('/detail/'+this.data._id+'?dataName='+this.dataName)
		}
	}
  }
</script>

<style  scoped>
  .uc-cell{width:6.4rem; margin:0 auto; padding:0.2rem 0.4rem; color:#494d4d; border-bottom:1px dashed #ccc;}
  .uc-cell h2{font-size:0.33rem; overflow:hidden;font-weight: 200;}
  .uc-cell img{display: inline-block;width: 5.5rem;height: 6rem;}
  .uc-cell p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
</style>
