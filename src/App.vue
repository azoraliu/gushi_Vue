<template>
  <div id="app">
    <Nav :navshow="navshow" :ChangeNav="ChangeNav"></Nav>
    <div class="left" v-if="navshow.shiwen||navshow.author">
        <left :selecttype="selecttype" :navshow="navshow" :Updateselecttype="Updateselecttype"></left>
        <Content v-for="i in contents.shilist" :selecttype="selecttype" :contents="i"></Content>
        
    </div>
    <!-- <Right :selecttype="selecttype">
      
    </Right> -->
  </div>
</template>

<script>
import Left from './components/Leftheader'
import Content from './components/Content'
import Right from './components/Right'
import Nav from './components/Nav'
import axios from 'axios'
import Vue from 'vue' 

export default {
  name: 'App',
   data(){
    return{
      navshow:{"tuijian":false,"shiwen":false,"author":false},
      selecttype:'不限',
      contents:{},
    }
  },
  components:{'left': Left,
   'Content':Content,
   'Right':Right,
   'Nav':Nav
  },
  methods:{
    Updateselecttype:function(type){
      this.selecttype=type;
      var apistr;
      switch(type){
        case '李白':
           apistr='libai';
           break;
        case '杜甫':
           apistr='dufu';
           break;
        default:
           apistr='libai';
           break;
      }
      var getstr='/api2/'+apistr;
      axios.get(getstr).then(response => {  
        var result = response.data.data;
        this.contents=result;
      }) 
    },
    ChangeNav:function(selnav){
      for(var key in this.navshow){
        this.navshow[key]=false;
      }
      switch(selnav){
        case 'tuijian':
           this.navshow.tuijian=true;
           break;
        case 'shiwen':
           this.navshow.shiwen=true;
           break;
        case 'author':
           this.navshow.author=true;
           break;
        default:
           break;
      }
    }
  }
}
</script>

<style>
#app{
  overflow: hidden;
}
.left{
  margin:0 10%;
  width: 60%;
  display: inline-block;
}
.right{
  margin-left: 30px;
  /*width: 30%;*/
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: LightYellow;
}
</style>
