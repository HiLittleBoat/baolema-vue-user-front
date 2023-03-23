<template>
  <div>
<!--轮播图-->
    <div style="height: 300px">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
<!--用户名/等级/去点餐-->
<!--视频-->
<!--日历-->

    <MenuFooter></MenuFooter>
  </div>


</template>



<script>
import MenuFooter from "@/components/MenuFooter.vue";
export default {
  name: "Home",
  components: {
    MenuFooter,
  },
  data(){
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  }
}
</script>

<style scoped>

</style>