<template>
  <div id="app">
        <input type="button" value='登录' @click="fun">
    
        <Login :msg='flag' @show='show'></Login>
        <Header></Header>
       
    
        <router-view></router-view> 
        
  </div>
</template>

<script>
import Login from '../src/components/Login'
import Header from '../src/components/Header'


export default {
    components:{
        Header,Login
    },
    data(){
        return{
            flag:false,
            text2:'',
        }
    },
   methods:{
       fun(){
           this.flag = !this.flag
       },
       show(value){
           this.text2 = value
       }
   },
   created(){
       this.axios.get('static/data.json').then((res)=>{
           var msg = res.data
           this.$store.commit('getmsg',msg)
           console.log(this.$store.state.msg)
       })
   }
}
</script>

<style>

</style>