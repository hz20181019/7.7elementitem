<template>
  <div class="container">
    <!-- 轮播图 -->
      <Banner></Banner>
      <div class="home-for" v-for="(item,index) in $router.options.routes" :key="index">
        <div v-for="(item,index) in item.children" :key="index">        
          <router-link :to="`${item.path}`">{{item.name}}</router-link>  
        </div>
      </div>
      <router-view></router-view>  
 </div>
</template>

<script>
import Banner from '../components/Banner.vue'


export default {
  name: 'home',
  components: {
   Banner,
  }
}
</script>

<style>
  .home-for{
    display:flex;
    justify-content: space-between;
    /* position:fixed;
    bottom:0; */
  }
</style>

