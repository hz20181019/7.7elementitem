  <div class="home-for" v-for="(item,index) in $router.options.routes" :key="index">
      <div v-for="(item,index) in item.children" :key="index">        
        <router-link :to="`${item.path}`">{{item.name}}</router-link>  
      </div>
    </div>
    <router-view></router-view>