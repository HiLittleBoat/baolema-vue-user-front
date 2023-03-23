<template>
    <div class="personal-center-container">
      <img src="../../assets/picture/userpage1.jpg" class="userpage1"/>
      <!--用户头像/昵称/手机号-->
      <div class="personal-center-profile">
        <img src="../../assets/picture/userpage2.jpg" class="avatar"/>
        <div class="user-info">
          <div class="user-name">Jenney</div>
          <div class="usergrade">白银堡堡</div>
          <div class="user-phone">136 **** 6887</div>
        </div>
        <!--差一个会员的logo /男生女生的logo-->
        <!--        <van-icon name="arrow" />-->
        <div class="user-mny">
          <div class="jifennum">46</div>
          <div class="jifen">积分</div>
          <div class="fenge"></div>
          <div class="dingdannum">13</div>
          <div class="dingdan">订单</div>
        </div>
      </div>

      <!--用户会员卡-->
      <!--      <van-divider/>-->
      <div class="personal-center-card">
        <van-steps :active="active" active-color="rgb(103 84 47)" inactive-color="#E8E8E8">
          <van-step>白银堡堡</van-step>
          <van-step>黄金堡堡</van-step>
          <van-step>荣耀堡堡</van-step>
          <van-step>……</van-step>
        </van-steps>
        <div class="center-card-text1">
          距离下一个等级还差
        </div>
        <div class="center-card-text2">
          507
        </div>
        <div class="fenge2"></div>
        <img src="../../assets/picture/userpage3.png" class="userpage3"/>
        <div class="center-card-text3">堡了嘛会员，全新升级</div>
        <div class="center-card-text4">超多权益解锁中…</div>
      </div>
      <img src="../../assets/picture/userpage4.png" class="userpage4"/>
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
  data(){
    return{
      step: [
        "白银堡堡",
        "黄金堡堡",
        "荣耀堡堡"
      ],
      currentSwipeItem: 1,
    }
  }
}
</script>

<style lang="scss" scoped>
#orderstep {
  margin: 60px auto
}
.userpage1{
  width: 100%;
  height: 140px;
}
/*用户vip卡*/
.personal-center-card {
  background-image: url("~@/assets/picture/vipcard.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 16px;
  height: 200px;
  margin-left: 6px;
  margin-right: 10px;
  margin-top: -10px;
  border-radius: 10px;
}

.jifennum{
  position: relative;
  top:85px;
  left: -250px;
  font-size: 25px;
}
.jifen{
  position: relative;
  top:84px;
  left: -249px;
  color: #5d5b5b;
  font-size: 15px;
}
.fenge{
  position: relative;
  width: 2px;
  height: 40px;
  left: -150px;
  top:33px;
  background-color: #e3e1e1;
}
.dingdannum{
  position: relative;
  left: -80px;
  font-size: 25px;
  top:-15px;
}
.dingdan{
  position: relative;
  top:-16px;
  left: -80px;
  color: #5d5b5b;
  font-size: 15px;
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
  background: #fcfbfb;
  height: 500px;
}


/*用户个人信息栏*/
.personal-center-profile {
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(128, 128, 128, 1);
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top:-20px;
  height: 170px;
  /*background: #fff;*/
}

/*头像*/
.avatar {
  position: relative;
  top:-40px;
  left: 15px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.user-info {
  flex-grow: 1;
  position: relative;
  left: 15px;
  top:-25px;
}

.user-name {
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 8px;
  text-align: left;
}
.usergrade{
  position: relative;
  top:-29px;
  left:63px;
  height: 20px;
  width: 70px;
  font-size: 12px;
  background-color: #f8e68c;
  border-radius: 20px;
  line-height:20px;
  color: #7c6a2b;
}
.user-phone {
  position: relative;
  left: 0px;
  top:-22px;
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
.van-step__title {
  text-align: center;
  background: transparent;
}
.van-steps {
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0);
  text-align: center;
}
/deep/.van-step--horizontal .van-step__circle-container {
    position: absolute;
    top: 30px;
    left: -8px;
    z-index: 1;
    padding: 0 8px;
    background-color: rgba(255, 255, 255, 0) !important;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);

}
.center-card-text1{
  position: relative;
  left: -105px;
  font-size: 3px;
  color: rgb(103, 84, 47);
}
.center-card-text2{
  position: relative;
  left: -33px;
  top:-20px;
  font-size: 14px;
  color: rgb(255, 255, 255);
}
.fenge2{
  position: relative;
  width: 330px;
  height: 1px;
  background-color: #e5cead;
  top:-10px;
}
.userpage3{
  position: relative;
  left: -110px;
  top:5px;
  width: 65px;
  height: 65px;
}
.center-card-text3{
  position: relative;
  left: 25px;
  top:-50px;
  font-weight:550;
  font-size: 17px;
}
.center-card-text4{
 position: relative;
  top:-50px;
  left: 5px;
  font-weight:200;
  font-size: 14px;
}
.userpage4{
  position: relative;
  top:-15px;
  width: 100%;
  height: 150px;
}
</style>