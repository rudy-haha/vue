<template>
  <div is='box'>
            <div id='main'>
                <div id='aside'>
                    <p>左侧内容</p>
                </div>
	            <div id='article'>
	                <p>右侧内容</p>
	            </div>
        	</div>

        	<div id='footer'>
	            <ul v-for='(d,i) in 3' :key='i'>
	                <li v-for='(d,i) in 5' :key='i'>{{123}}</li>
	            </ul>
       		</div>
        </div>
</template>

<script>

export default {
	data(){
		return{
				str:''
		}
	},
	beforeRouterUpdate(to,from,next){
		this.str = this.$store.state.msg[to.params.path].title
		next()
	}
}
</script>

<style>

</style>