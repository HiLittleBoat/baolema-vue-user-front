<template>
  <div id="body">

    <!--返回按钮-->
    <div id="backtitle">
      <van-icon name="arrow-left" @click="back" id="backicon"/>
    </div>
    <!--取餐码-->
    <div>
      <h1>230317001</h1>

    </div>


    <!--订单状态-->
    <div id="step">
      <van-steps :active="currentSwipeItem">

        <!--        2-->

        <van-step v-for="(item, idx) in 4" :key="idx">
          <template v-slot:active-icon>

            <!-- 自定义激活时的样式 -->
            <div class="step-item">
              <div class="steps-active-icon">
                <!-- 如果有icon或者图片可以更换放在这里，我的比较简单，我直接css画个圆 -->
                <van-icon :name="`${stepicon[idx]}`" size="50px" style="position: absolute;left: -20px;top: -50px"
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
                <van-icon :name="`${stepicon[idx]}`" size="40px" style="position: absolute;left: -20px;top: -50px;"/>
              </div>
              <!-- 激活并且完成的样式 -->
              <div v-else class="steps-finish-icon">
                <!-- 如果有icon或者图片可以更换放在这里，我的比较简单，我直接css画个圆 -->
                <van-icon :name="`${stepicon[idx]}`" size="40px" style="position: absolute;left: -20px;top: -50px;"/>
              </div>
              <!-- 一定要和激活状态写在一起，不然文字就去进度条上方了，不要文字这个可以不要 -->
              <span :class="currentSwipeItem > idx?'title-inactive':'title-finish'">
              配餐中
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
          style="background-color: #ffffff;"
      />
    </div>

<!--订单信息-->
    <div id="order-detail-message">
      <h5 >订单信息</h5>
      <van-cell-group>
        <van-cell title="订单编号" value="230317001" />
        <van-cell title="下单时间" value="2020-03-17 12:00:00" />
        <van-cell title="取餐时间" value="2020-03-17 12:00:00" />
        <van-cell title="取餐码" value="230317001" />
        <van-cell title="订单金额" value="￥39.00" />
      </van-cell-group>
    </div>

    <!--我已取餐点击/再来一单-->

  </div>
</template>

<script>

import {Icon, Step, Steps, Card} from 'vant';

export default {
  name: "Order",
  components: {
    Icon,
    Step,
    Steps,
    Card
  },
  data() {
    return {
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

      //订单菜品列表
      orderDetailList : [
        {
          dishName: "汉堡",
          description:"好吃的汉堡",
          number:3,
          dishAmount: 39.0,
          dishPhoto:"https://img01.yzcdn.cn/vant/ipad.jpeg"
        },
        {
          dishName: "汉堡",
          description:"好吃的汉堡",
          number:1,
          dishAmount: 15.0,
          dishPhoto:"https://img01.yzcdn.cn/vant/ipad.jpeg"
        },
        {
          dishName: "汉堡",
          description:"好吃的汉堡",
          number: 2,
          dishAmount: 39.0,
          dishPhoto:"https://img01.yzcdn.cn/vant/ipad.jpeg"
        },
        {
          dishName: "汉堡",
          description:"好吃的汉堡",
          number: 3,
          dishAmount: 39.0,
          dishPhoto:"https://img01.yzcdn.cn/vant/ipad.jpeg"
        },
        {
          dishName: "汉堡",
          description:"好吃的汉堡",
          number: 3,
          dishAmount: 39.0,
          dishPhoto:"https://img01.yzcdn.cn/vant/ipad.jpeg"
        }

      ],
    }
  },

  methods: {
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
    back(){
      this.$router.go(-1);
    }
  },
  mounted() {
    // this.getOrderDishes();
  }
}
</script>

<style lang="scss" scoped>

#order-detail-message{
  width: 95%;
  position: static;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
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
  height: 50px;
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
  height: 100%;
}

#step {
  /*margin-top: 20px;*/
  /*margin-left: 10px;*/
  /*margin-right: 10px;*/
  position: relative;
  left: 0;

}

</style>