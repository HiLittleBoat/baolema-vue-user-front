<template>
  <div>
    <div class="personal-center-container">

      <!--用户头像/昵称/手机号-->
      <div class="personal-center-profile">
        <img src="https://img01.yzcdn.cn/vant/cat.jpeg" class="avatar"/>
        <div class="user-info">
          <div class="user-name">Jenny</div>
          <div class="user-phone">136 **** 6887</div>
        </div>
        <!--差一个会员的logo /男生女生的logo-->
        <!--        <van-icon name="arrow" />-->
      </div>

      <!--用户会员卡-->
      <!--      <van-divider/>-->
      <div class="personal-center-card">
        <!--        <img url="@/assets/picture/vipcard.png"></img>-->
        <!--        <van-card class="personal-center-card-body" padding="10px">-->
        <!--          <div class="personal-center-card-header">会员卡</div>-->
        <!--          <div class="personal-center-card-info">-->
        <!--            <div class="personal-center-card-id">卡号：1234567890</div>-->
        <!--            <div class="personal-center-card-level">等级：钻石会员</div>-->
        <!--            <div class="personal-center-card-date">有效期至：2023-05-01</div>-->
        <!--          </div>-->
        <!--        </van-card>-->
      </div>
      <!--      <van-divider/>-->
      <!--      <van-divider class="personal-center-divider"/>-->

      <!--用户订单/历史数据-->
      <div id="ordernav">
        <van-grid id="vanordernav" direction="horizontal" clickable :column-num="2" style="border-radius: 30px">
          <van-grid-item id="vanordernav1" icon="todo-list-o" text="我的订单" to="/" style="border-radius: 30px"/>
          <van-grid-item icon="shop-collect-o" text="我的常点" url="/vant/mobile.html"/>
        </van-grid>
      </div>



      <div class="personal-center-lists">
        <van-cell-group>
          <van-cell title="我的订单"
                    icon="orders"
                    is-link
                    :to="{path: '/my-order'}"
                    class="personal-center-cell"
          />
          <van-cell title="我的收藏"
                    icon="star-o"
                    is-link
                    :to="{path: '/my-collection'}"
                    class="personal-center-cell"
          />
          <van-cell title="地址管理"
                    icon="location-o"
                    is-link
                    :to="{path: '/address'}"
                    class="personal-center-cell"
          />
          <van-cell title="账户设置"
                    icon="setting-o"
                    is-link
                    :to="{path: '/account-setting'}"
                    class="personal-center-cell"
          />
        </van-cell-group>
      </div>
      <van-divider class="personal-center-divider"/>
      <div class="personal-center-lists">
        <van-cell-group>
          <van-cell title="联系客服"
                    icon="customer-service"
                    class="personal-center-cell"
                    @click="contactCustomerService"
          />
          <van-cell title="关于我们"
                    icon="info-o"
                    class="personal-center-cell"
                    @click="aboutUs"
          />
        </van-cell-group>
      </div>
    </div>





    <!--历史订单卡订单-->

    <!--最近一次订单-->


    <!--退出登录-->
    <van-button type="danger" round block @click="logout">退出登录</van-button>


    <!--底部导航-->
    <Menu-footer></Menu-footer>
  </div>
</template>

<script>
import MenuFooter from "@/components/MenuFooter.vue";

export default {
  name: "UserPage",
  components: {
    MenuFooter,
  },
}
</script>

<style scoped>

/*用户vip卡*/
.personal-center-card {
  background-image: url("~@/assets/picture/vipcard.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 16px;
  height: 200px;
  margin-left: 6px;
  margin-right: 10px;
}


/*我的订单+我的常点*/
#ordernav{
  margin: 10px;
  border-radius: 30px;
}
#vanordernav{
  border-radius: 30px;
}
#vanordernav1{
  border-radius: 30px;
}

.van-grid van-hairline--top{
  border-radius: 30px !important;
}
.van-grid-item{
  border-radius: 30px !important;
}

.personal-center-card-body {
  /*background-color: rgba(250,232,208,.75);*/
  background: null;
  /*color: #fff;*/

  border-radius: 10px;
}

.personal-center-card-header {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}

.personal-center-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.personal-center-card-text {
  margin-bottom: 5px;
}

.personal-center-container {
  background: #f4f4f4;
}


/*用户个人信息栏*/
.personal-center-profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  padding-top: 30px;
  /*background: #fff;*/

}

/*头像*/
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.user-info {
  flex-grow: 1;
}

.user-name {
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 8px;
  text-align: left;
}

.user-phone {
  font-size: 16px;
  line-height: 22px;
  color: #888;
  text-align: left;
}

.personal-center-divider {
  margin: 16px 0;
}

.personal-center-lists {
  margin: 10px;
  background: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
}

.personal-center-cell {
  padding-left: 16px;
  font-size: 16px;
  color: #333;
}

.personal-center-cell-icon {
  font-size: 20px;
  margin-right: 8px;
  color: #ff9815;
}

</style>