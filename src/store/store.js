
import Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        msg:''
    },
    mutations:{
        getmsg(state,val){
            this.state.msg = val
    
        }
    }
})