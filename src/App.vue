<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>
<script>
  // import Nav from './components/Nav'
export default {
  components:{
    // Nav
  }
}
</script>

<style>
 .container{
    position:fixed;
    top:0;
    bottom:58px;
    width:100%;
    overflow-y:scroll;
    /* 超出滚动 */
  }
  ul,li{
    list-style:none;
  }
  *{
    padding:0;
    margin:0;
  }
  a {
    text-decoration: none;
    color:#333;
    text-align:center;
  }
</style>
