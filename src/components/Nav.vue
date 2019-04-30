<template>
	<div class="nav">
		<div class="navleft">
			<div class="TJ" :class="{'navbackground':navshow.tuijian}" @click="ChangeNav('tuijian')">
				<span class="nav-span">推荐</span>
			</div>
			<div class="SHI" :class="{'navbackground':navshow.shiwen}" @click="ChangeNav('shiwen')">
				<span class="nav-span">诗文</span>
			</div>
			<div class="Auth" :class="{'navbackground':navshow.author}" @click="ChangeNav('author')">
				<span class="nav-span">作者</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		navshow:Object,
		ChangeNav:Function
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
.nav{
	height: 40px;
	background-color: #757863;
	margin-bottom:20px; 
}
.navleft{
	width: 60%;
	height: 100%;
	color:#fff;
	display: flex;
}
.TJ{
	text-align: center;
	line-height: 100%;
	flex-grow: 1;
}
.TJ:hover{
	background-color: rgba(0,0,0,0.5);
}
.SHI{
	text-align: center;
	flex-grow: 1;
}
.SHI:hover{
	background-color: rgba(0,0,0,0.5);
}
.Auth{
	text-align: center;
	flex-grow: 1;
}
.Auth:hover{
	background-color: rgba(0,0,0,0.5);
}
.nav-span{
	line-height:40px;
}
.navbackground{
	background-color: rgba(0,0,0,0.5);
}
</style>