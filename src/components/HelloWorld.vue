<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
    <Content v-bind:num="number" v-on:incre="increment" v-on:decre="decrement"></Content>
    <p>parent:{{number}}</p>
	</div>
</template>
<script>
  import Content from "./content.vue";
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
        number:10
			}
		},
    methods:{
		    increment(){
		        this.number++;
        },
        decrement(){
          this.number--;
        }
    },
    components:{
      Content
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
