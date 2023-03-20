<template>
  <div id="body">
    <!--返回按钮-->
    <van-nav-bar
        title="订单确认"
        left-arrow
        @click-left="onClickLeft"
    />
<!--    <div id="backtitle">-->
<!--      <van-icon name="arrow-left" @click="back" id="backicon"/>-->
<!--    </div>-->

    <!--餐品详情-->
    <div id="order-detail-payed-title" style="text-align: left">
      <p><strong>订单详情</strong></p>
      <van-divider />
    </div>
    <div id="order-detail-payed" v-for="(dish, index) in orderDetailList">
      <van-card
          :num="`${dish.number}`"
          :price="`${dish.dishAmount/dish.number}`"
          :desc="`${dish.description}`"
          :title="`${dish.dishName}`"
          :thumb="`${dish.dishPhoto}`"
          style="background-color: #ffffff; text-align: left;"
      />
<!--      <van-divider dashed></van-divider>-->
    </div>



    <!--会员优惠-->
    <div>
<!--      <van-divider dashed></van-divider>-->
      <div id="order-detail-payed-member" style="text-align: left" v-if="vipLevel!=0">

        <p><strong>会员优惠</strong></p>
        <van-divider />
<!--        <p>您是v{{vipLevel}}尊享会员,可享受{{vipList[vipLevel]}}折优惠</p>-->
<!--优惠券列表-->

        <!-- 优惠券单元格 -->
        <div>
        <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
        />
        <!-- 优惠券列表 -->
        <van-popup
            show-exchange-bar="false"
            v-model="showList"
            round
            position="bottom"
            style="height: 90%; padding-top: 4px;"
        >
          <van-coupon-list
              :coupons="coupons"
              :chosen-coupon="chosenCoupon"
              :disabled-coupons="disabledCoupons"
              @change="onChange"
              @exchange="onExchange"
          />
        </van-popup>
        </div>
      </div>
    </div>

    <!--总价格-->
    <div id="order-detail-payed-total" style="text-align: right">
      <van-divider dashed></van-divider>
      <p v-if="vipLevel!=0">已优惠 <strong style="color: red">￥ {{vipAmount}}</strong>
      实付 ￥ <strong>{{ totalAmount }}</strong></p>

    </div>
    <van-divider dashed></van-divider>

    <!--footer-->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />

  </div>
</template>

<script>
import {CouponCell, CouponList, Popup, SubmitBar} from 'vant';

const coupon = {
  available: 1,
  condition: '无使用门槛',
  reason: '',
  description: '您是v1尊享会员,可享受9.8折优惠',
  value: 150, // 优惠金额,单位分
  name: '会员专享折扣',
  startAt: 1672538963, // 2023-01-01
  endAt: 1893456000,//2023-12-31
  valueDesc: '9.8',
  unitDesc: '折',
};

export default {
  name: "Pay",
  components: {
    CouponCell,
    CouponList,
    Popup,
    SubmitBar
  },
  data() {
    return {

      //优惠券列表
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      vipAmount: 3.3,

      //会员等级
      vipLevel: 1,
      //会员优惠列表
      vipList: [0, 9, 8, 7, 6, 5],

      //订单总价
      totalAmount: 93.0,
      //订单菜品列表
      orderDetailList: [
        {
          dishName: "汉堡",
          description: "好吃的汉堡",
          number: 3,
          dishAmount: 39.0,
          dishPhoto: "https://i.postimg.cc/NFpkQDCW/image.png"
        },
        {
          dishName: "汉堡",
          description: "好吃的汉堡",
          number: 1,
          dishAmount: 15.0,
          dishPhoto: "https://i.postimg.cc/NFpkQDCW/image.png"
        },
        {
          dishName: "汉堡",
          description: "好吃的汉堡",
          number: 2,
          dishAmount: 39.0,
          dishPhoto: "https://i.postimg.cc/NFpkQDCW/image.png"
        },
        {
          dishName: "汉堡",
          description: "好吃的汉堡",
          number: 3,
          dishAmount: 39.0,
          dishPhoto: "https://i.postimg.cc/NFpkQDCW/image.png"
        },
        {
          dishName: "汉堡",
          description: "好吃的汉堡",
          number: 3,
          dishAmount: 39.0,
          dishPhoto: "https://i.postimg.cc/NFpkQDCW/image.png"
        }

      ],
    }
  },
  methods: {

    //优惠券列表
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },

    //返回按钮
    onClickLeft() {
      this.$router.go(-1);
    }

  }
}
</script>

<style scoped>
/*body*/
#body {
  background-color: #f5f5f5;
}

/*会员优惠*/
#order-detail-payed-member{
  width: 95%;
  position: static;
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 15px;
  background: #ffffff;
  border-radius: 10px;
}


#order-detail-payed-title{
  width: 95%;
  position: static;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 15px;
  background: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
    /*border-radius: 10px;*/
}

#order-detail-payed {
  width: 95%;
  position: static;
  margin-top: -20px;
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 15px;
  background: #ffffff;
  border-radius: 10px;
}

/*实付金额*/
#order-detail-payed-total {
  width: 95%;
  position: static;
  margin-top: -20px;
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 10px;
  background: #ffffff;
  border-radius: 10px;
}

/*//实付金额*/
#order-detail-payed-total {
  width: 95%;
  position: static;
  margin-top: -20px;
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 10px;
  background: #ffffff;
  border-radius: 10px;
}


</style>