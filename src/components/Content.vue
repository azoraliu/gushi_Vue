<template>
	<div class="content">
		<div class="selectcontent">
			<h3 class="con-name">{{contents.shiname}}</h3>
			<div class="chao">朝代：{{contents.chao}}</div>
			<div class="con" v-for="i in contents.shicontent.split('\n')">{{i}}</div>
		</div>		
	</div>
</template>

<script>
export default {
	props:{
		selecttype:String,
		contents:Object,
	},
   data(){
		return{
		}
	},
	methods:{
		
	}
}
</script>

<style>
.content{
	margin-top: 30px;
}
.con-name{
	margin: 5px 0;
	color: 	#4169E1;
}
.selectcontent{
    border:1px solid #ccc;
	border-radius: 10px;
	padding: 10px;
	background-color: LightYellow;
}
.chao{
	font-size: 13px;
	margin: 10px 0;
	color: #ccc;
}
</style>