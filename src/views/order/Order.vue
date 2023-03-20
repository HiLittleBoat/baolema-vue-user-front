<template>
  <div id="body">

    <!--返回按钮-->
    <div id="backtitle">
      <van-icon name="arrow-left" @click="back" id="backicon"/>
    </div>

    <div id="truebody">
      <!--取餐码-->
      <div id="numberbar" style="text-align: left">
        <h1 id="odernumber">230317001</h1>
        <van-badge content="取餐码" id="numberindex"/>

        <div id="text">
          <p>{{ step[currentSwipeItem] }}...</p>
        </div>

      </div>


      <!--订单状态-->
      <div id="step">
        <van-steps :active="currentSwipeItem" id="orderstep">

          <!--        2-->

          <van-step v-for="(item, idx) in 4" :key="idx">
            <template v-slot:active-icon>

              <!-- 自定义激活时的样式 -->
              <div class="step-item">
                <div class="steps-active-icon">
                  <!-- 如果有icon或者图片可以更换放在这里，我的比较简单，我直接css画个圆 -->
                  <van-icon :name="`${stepicon[idx]}`" size="40px" style="position: absolute;left: -13px;top: -48px"
                            color="#ffcd56"/>
                </div>
                <!-- 一定要和激活状态写在一起，不然文字就去进度条上方了，不要文字这个可以不要 -->
                <span :class="currentSwipeItem === idx?'title-active':''">
                {{ step[idx] }}
            </span>
              </div>
            </template>
            <template v-slot:inactive-icon>
              <!-- 自定义未激活时的样式 由于版本问题，目前我只有slot两种，vant版本v2.12.7以上可以直接slot三种-->
              <div class="step-item">
                <!-- 未激活的样式 -->
                <div v-if="currentSwipeItem > idx" class="steps-inactive-icon">
                  <!-- 如果有icon或者图片可以更换放在这里，我的比较简单，我直接css画个圆 -->
                  <van-icon :name="`${stepicon[idx]}`" size="30px" style="position: absolute;left: -9px;top: -43px;"/>
                </div>
                <!-- 激活并且完成的样式 -->
                <div v-else class="steps-finish-icon">
                  <!-- 如果有icon或者图片可以更换放在这里，我的比较简单，我直接css画个圆 -->
                  <van-icon :name="`${stepicon[idx]}`" size="30px" style="position: absolute;left: -9px;top: -43px;"/>
                </div>
                <!-- 一定要和激活状态写在一起，不然文字就去进度条上方了，不要文字这个可以不要 -->
                <span :class="currentSwipeItem > idx?'title-inactive':'title-finish'">
              {{ step[idx] }}
            </span>
              </div>
            </template>
          </van-step>


        </van-steps>
      </div>

      <!--订单详情-->
      <div id="order-detail-payed" v-for="(dish, index) in orderDetailList">
        <van-card
            :num="`${dish.number}`"
            :price="`${dish.dishAmount/dish.number}`"
            :desc="`${dish.description}`"
            :title="`${dish.dishName}`"
            :thumb="`${dish.dishPhoto}`"
            style="background-color: #ffffff; text-align: left;"
        />
        <van-divider dashed></van-divider>
      </div>
      <div id="order-detail-payed-total" style="text-align: right">
        <p>实付 ￥ <strong>{{ totalAmount }}</strong></p>

      </div>


      <!--订单信息-->
      <div id="order-detail-message">
        <h5 style="text-align: left; ">订单信息</h5>
        <van-cell-group>
          <van-cell title="订单编号" :value="`${orderId}`"/>
          <van-cell title="下单时间" :value="`${createdTime}`"/>
          <van-cell title="取餐码" value="230317001"/>
          <van-cell title="订单金额" :value="`￥${totalAmount}`"/>
        </van-cell-group>
      </div>
    </div>

    <!--我已取餐点击/再来一单-->
    <!-- 设置footer固定在底部-->
    <div id="orderfooter">
      <van-button plain hairline round color="#000000" class="footer-button" size="formal" @click="finish">我已取餐
      </van-button>
      <van-button round color="#fdcc56" class="footer-button" size="formal" @click="gotoRate">点我评价</van-button>
    </div>

    <van-dialog v-model="show" title="对堡了嘛还满意吗？" show-cancel-button :beforeClose="beforeClose">
      <van-rate v-model="value" allow-half void-icon="star" void-color="##ffd21e" style="margin: 20px"/>
    </van-dialog>

  </div>
</template>

<script>

import {Icon, Step, Steps, Card} from 'vant';
import Orderfooter from "@/views/order/Orderfooter.vue";

export default {
  name: "Order",
  components: {
    Icon,
    Step,
    Steps,
    Card,
    Orderfooter
  },
  data() {
    return {
      // 评价弹出框状态
      show: false,
      // 评价星级
      value: 2.5,
      // 步骤条
      currentSwipeItem: 2,
      step: [
        "确认中",
        "配餐中",
        "待取餐",
        "已完成"
      ],

      stepicon: [
        "todo-list-o",
        "fire-o",
        "bulb-o",
        "passed"
      ],

      //订单信息
      orderId: "2023031712000001", //有可能是哈希后的，名字不一定对
      orderTime: "2020-03-17 12:00:00",
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
    // 点击 去评价，弹出评价框
    gotoRate() {
      // 如果没点已取餐，就不能评价
      if (this.currentSwipeItem != 3) {
        this.$toast.fail('请取餐后在评价嗷');
      } else {
        //弹出评价框
        this.show = true;
      }


    },
    // 监听评论框的内容
    beforeClose(action, done) {
      if (action === 'confirm') {
        //获取评价信息，返回给后端数据
        console.log(this.value)
        this.$toast.success('感谢评价！\n小店会继续努力的!');
        done();
      } else {
        done();
      }
    },

    // 点击 已取餐
    finish() {
      this.$toast.success('谢谢惠顾！\n去评价一下');
      this.currentSwipeItem = 3;
    },
    //


    //获取订单菜品列表
    // getOrderDishes(){
    //   // 通过后端API获取菜品列表(orderinfo/{status}/{number}) 这里是模拟数据，后期要改，
    //   this.$api({
    //     url: 'orderinfo/0/3',
    //     method: 'get'
    //   }).then(res => {
    //     console.log(res)
    //     this.orderDishList = res.data[0].orderDetailList;
    //     console.log(this.orderDishList);
    //   }).catch(function (error) {
    //     console.log(error);
    //   });
    // },
    //返回上一层，没完全实现
    back() {
      this.$router.go(-1);
    }
  }
  ,
  mounted() {
    // this.getOrderDishes();
  }
}
</script>

<style lang="scss" scoped>

#orderstep {
  margin: 60px auto
}

.footer-button {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 3px;
  width: 100px;
}

// footer
#orderfooter {
  text-align: right;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  background-color: #f5f5f5;
  border-top: 1px solid #e5e5e5;
  padding-bottom: 15px;
}

//这个是取餐码
#numberindex {
  position: absolute;
  top: 33px;
  left: 189px;
  height: 20px;
  width: 50px;
  font-size: 13px;
  color: #FFFFFF;
  text-align: center;
}

//取餐号数字
#odernumber {
  position: relative;
  top: 25px;
  margin-bottom: -5px;
  font-size: 30px;
  color: #000000;
  font-weight: bold;
}

//取餐号文字
#text {
  position: relative;
  top: 15px;
  margin-bottom: -5px;
  color: #000000;
  font-size: 12px;
}

//取餐吗部分
#numberbar {
  margin-left: 30px;

  top: 70px;
  left: 0;
  //width: 100%;
  height: 50px;
  z-index: 100;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  color: #000000;
}


//出去头部的高度和底部的高度
#truebody {
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
}

//实付金额
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

//订单信息
#order-detail-message {
  width: 95%;
  position: static;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 15px;
  background: #ffffff;
  border-radius: 10px;
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


.van-steps {
  background: transparent; // 如果背景是白色就不需要了，默认是白色的
  width: 80%;
  margin: 80px auto;
  overflow: visible; //如果不需要文字，或者不需要调整位置，可以不设置

  .step-item {
    position: relative;

    span {
      position: absolute;
      top: 20px;
      left: -20px;
      width: 50px;
      z-index: 1;
      font-size: 13px;
      color: #999999;
    }

    .title-active {
      // 自定义文字激活
      font-weight: bold;
      color: #0a0101;
      left: -20px;
      width: 50px;
      font-size: 13px
    }

    .title-inactive {
      // 自定义文字激活并且完成
      color: #999999;
      left: -20px;
      width: 50px;
      font-size: 13px
    }

    .title-finish {
      //自定义未激活
      color: #999999;
      //left: -20px;
      //width: 50px;
      //font-size: 13px
    }
  }

  .steps-active-icon {
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    background: #f5d30f;
    border: 3px solid #ffc4c4;
    border-radius: 50%;
  }

  .steps-inactive-icon,
  .steps-finish-icon {
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 50%;
  }

  .steps-inactive-icon {
    border: none;
  }

  .steps-finish-icon {
    border: 3px solid #c8c8c8;
  }

  ::v-deep .van-step__circle-container {
    background-color: transparent; // 如果背景是白色就不需要了，默认是白色的
  }

  ::v-deep .van-step--horizontal .van-step__line {
    height: 4px; // 自定义调整进度条的粗细
    top: 28px; // 自定义调整进度条的位置
    background-color: #e4e4e4;
  }

  ::v-deep .van-step--finish .van-step__line {
    background-color: #fdcc56; //自定义激活时进度条的颜色
    border: none;

  }
}

#backtitle {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  border-top: 1px solid #e5e5e5;
}

/*返回按钮*/
#backicon {
  position: absolute;
  left: 10px;
  margin-top: 10px;
  font-size: 30px;

}

/*body*/
#body {
  background-color: #f5f5f5;
}

#step {
  /*margin-top: 20px;*/
  /*margin-left: 10px;*/
  /*margin-right: 10px;*/
  position: relative;
  left: 0;

}

</style>