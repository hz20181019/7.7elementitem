<template>
  <el-carousel :interval="2000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in imgData" :key="index">
      <img :src="item.img_url">
    </el-carousel-item>
  </el-carousel>
</template>


<script>
export default {
  data(){
    return {
      imgData:[
        {
          img_url:'http://img4.imgtn.bdimg.com/it/u=4095972217,2155674715&fm=26&gp=0.jpg'
        },
        {
          img_url:'http://img0.imgtn.bdimg.com/it/u=4219006718,575411024&fm=26&gp=0.jpg'
        },
        {
          img_url:'http://img0.imgtn.bdimg.com/it/u=2150132776,2081912714&fm=26&gp=0.jpg'
        },
        {
          img_url:'http://img5.imgtn.bdimg.com/it/u=16322759,1779271866&fm=26&gp=0.jpg'
        },
        {
          img_url:'http://img2.imgtn.bdimg.com/it/u=1761125062,1558451728&fm=26&gp=0.jpg'
        }
      ]
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

