<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/user/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/user/menu">菜单</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o" to="/user/orderhistory">订单</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user/user">我的</van-tabbar-item>
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