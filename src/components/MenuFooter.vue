<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/user/menu/footer">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/user/menu">菜单</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shoppingcart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "MenuFooter",
  data() {
    return {
      active: []
    };
  }
}
</script>

<style scoped>

</style>