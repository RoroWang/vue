<template>
  <div class="content">
    <UcNav bgColor="none" :borderWidth="0" arrow="gray"></UcNav>
    <h1></h1>
    <div class="login-box">
      <p class="lsolid"></p>
      <div class="login">
        <!-- <a href="login_m.html">登录</a> -->
        <router-link to="/login">登录</router-link>
        <span></span>
        <router-link to="/reg">注册</router-link>
        <!-- <a href="reg_m.html">注册</a> -->
      </div>
      <p class="rsolid"></p>
    </div>
    <div class="xxx">
      <uc-input label="账号" v-model="username"/>
      <uc-input label="密码" v-model="password"/>
	  <!-- <input type="text" v-model="username"> -->
	  <!-- <input type="password" v-model="password"> -->
	  
    </div>
    
    <uc-button text="登录" @click.native='login' />
	<!-- <input type="button" value="登录" @click="login"> -->
  </div>
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav.vue'
	import UcButton from '../components/uc-button.vue'
	import UcInput from '../components/uc-input.vue'
	
  export default {
    data(){return {
		username:'',
		password:''
	}},
    components:{
		UcNav,UcButton,UcInput
	},
    mounted(){},
    updated(){},
    methods: {
        login() {
          // alert(1)
          let params = new URLSearchParams();
          params.append('username', this.username)
          params.append('password', this.password)
          axios({
            url: '/api/login',
            method: 'post',
            data: params
          }).then(
            res => {
              if(res.data.err==0){
                //种token,跳转user
                window.localStorage.setItem('token',res.data.token);
                this.$router.push('/user')
              }else{
                this.mess=res.data.msg
              }
            }
          )
          
        }
      }
    }
</script>

<style scoped>
  .content {
    max-width: 6.4rem;
    margin: 0 auto;
  }
  
  .content .fhbtn {
    padding-top: 0.27rem;
  }
  
  .content .fhbtn a {
    display: block;
    width: 0.23rem;
    height: 0.25rem;
    background: url(../assets/img/history1.png) no-repeat 0 0;
    background-size: 100%;
    margin-left: 0.3rem;
  }
  
  .content h1 {
    width: 2.18rem;
    height: 1.35rem;
    background: url(../assets/img/say.jpg) no-repeat 0 0;
    background-size: 60%;
    margin-left:2.7rem;
    margin-top: 1.22rem;
	
  }
  
  .content .login {
    width: 2.0rem;
    height: 0.38rem;
    margin: 0 auto;
    margin-top: 0.85rem;
  }
  
  .login a {
    width: 0.97rem;
    height: 0.38rem;
    font-size: 0.35rem;
    line-height: 0.38rem;
    float: left;
    color: #4c4f50;
    text-align: center;
  }
  
  .login span {
    float: left;
    height: 0.38rem;
    border-left: 1px solid #4c4f50;
  }
  
  .content .login-box {
    position: relative;
  }
  
  .content .login-box .lsolid {
    width: 1.96rem;
    height: 0.18rem;
    border-bottom: 1px solid #4c4f50;
    position: absolute;
    top: 0;
    left: 0.1rem;
  }
  
  .content .login-box .rsolid {
    width: 1.96rem;
    height: 0.18rem;
    border-bottom: 1px solid #4c4f50;
    position: absolute;
    top: 0;
    right: 0.1rem;
  }
  
  .xxx{
    margin: 0 auto;
    margin-top: 0.68rem;
  }
</style>
