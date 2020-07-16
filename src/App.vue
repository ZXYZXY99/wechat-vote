<template>
  <div id="app" :style="conheight">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      conheight:{
        height:''
      }
    }

  },

  created() {
    window.addEventListener('resize', this.getHeight);
    this.getHeight()
  },
  methods:{
    getHeight(){
      this.conheight.height=window.innerHeight-170+'px';
    },
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 20px;
  /*color: #2c3e50;*/
  height: 100%;

}
</style>
