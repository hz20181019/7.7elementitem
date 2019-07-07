<template>
  <el-carousel :interval="1000" arrow="always">
    <el-carousel-item v-for="(item,index) in urlData" :key="index">
      <img :src="item.url"/>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
export default {
       data() {
        return {
            urlData: [
            {
                url:'http://img0.imgtn.bdimg.com/it/u=3057006227,42122077&fm=26&gp=0.jpg'
            },
            {
                url:'http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg'
            },
            {
                url:'http://img4.imgtn.bdimg.com/it/u=3898000551,765694487&fm=26&gp=0.jpg'
            },
            {
                url:'http://img5.imgtn.bdimg.com/it/u=52077522,466443557&fm=26&gp=0.jpg'
            }
            ]
        }
    },
}
</script>

<style>
    img{
        width:100%;
        height:300px;
    }
</style>

