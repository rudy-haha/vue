<template>
   <div id='login' v-show="msg">
        <input type="text" v-model="text">
        <input type="button" value='login' @click="fun2">
    </div>
</template>

<script>
export default {
    data(){
        return{
            text:'',
        }
    },
    methods:{
        fun2(){
            this.$emit('show',this.text)
        }
    },
    props:['msg']
}
</script>

<style>

</style>