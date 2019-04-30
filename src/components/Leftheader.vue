<template>
	<div class="titletype">
		<div class="son1">
			<h4 class="type">
				<span>{{selecttype}}</span>
			</h4>
		    
		</div>
		<div class="type1" v-if="navshow.shiwen">
			<span class="sleft">{{lefttype[0]}}</span>
			<a v-for="i in type1" href="#123" @click="Updateselecttype(i)" :class="{'aselect':selecttype==i}">
				{{i}}
			</a>
		</div>
		<div class="type2" v-if="navshow.shiwen">
			<span class="sleft">{{lefttype[1]}}</span>
			<a v-for="i in type2" href="#123" @click="Updateselecttype(i)" :class="{'aselect':selecttype==i}">
				{{i}}
			</a>
		</div>
		<div class="type3">
			<span class="sleft">{{lefttype[2]}}</span>
			<a v-for="i in type3" href="#123" @click="Updateselecttype(i)" :class="{'aselect':selecttype==i}">
				{{i}}
			</a>
		</div>
	</div>
</template>

<script>
export default {
   props:{selecttype:String,
   navshow:Object,
   Updateselecttype:Function
   },
   data(){
		return{
			lefttype:['类型:','作者:','朝代:'],
			type1:["写景","咏物"],
			type2:["李白","杜甫"],
			type3:["先秦","两汉"],
		}
	},
	methods:{
	}
}
</script>

<style>
.titletype{
	border:1px solid #ccc;
	border-radius: 10px;
	padding: 10px;
	background-color: LightYellow;
}
.type{
	margin: 5px 0;
}
a{
	text-decoration: none;
}
a:hover{
	border-bottom: 1px solid black;
}
.aselect{
	color: red;
}
.type1,.type2,.type3{
	padding: 5px;
	border-top:1px dotted #ccc;
	font-size: 12px;
}
</style>