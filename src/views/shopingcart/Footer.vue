<template>
  <div>
    <div id="shoppingcartfooter">
      <!--购物车按钮-->
      <b-button v-b-toggle.sidebar-right id="cartbutton">
        <b-icon icon="cart3" animation="cylon" font-scale="2"></b-icon>
      </b-button>
    </div>
    <!-- 弹出购物车框   -->
    <b-sidebar id="sidebar-right" title="购物车" right shadow>
      <div class="px-3 py-2">
        <!--  推荐商品-->
        <div id="recommend">

        </div>
        <!--已选商品-->
        <div id="selected">
          <div class="card-title">
            <span class="yuanLine">1</span>
          </div>

        </div>
        <div class="gif">
          <b-img src="http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190504/fafc2b313c5d4c58addfa6938d12c5ac.gif" fluid thumbnail/>
        </div>
        <!--          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>-->
      </div>
    </b-sidebar>

  </div>
</template>

<script>
import {BButton, BSidebar, BImg} from 'bootstrap-vue'

export default {
  name: "shoppingcartfooter",
  components: {
    BButton,
    BSidebar,
    BImg
  }
}
</script>

<style scoped>
#shoppingcartfooter {
  position: absolute;
  right: 0;
  top: 300px;
  width: 60px;
  height: 50px;
  /*background-color: #f5f5f5;*/
  border-top: 1px solid #e5e5e5;
}

#cartbutton {
  background-color: #ffcd56;
  /* 形状圆形 */
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px

}

#sidebar-right {
  background: darkgrey;
}

#recommend {
  background: white;
  height: 100px;
  border-radius: 10px;
}

#selected {
  margin-top: 10px;
  background: white;
  border-radius: 10px;
}

#cartbutton {
  background: #ffcd56;
}

.yuanLine{

  height: 10px;
  color: #d30008;
  box-sizing: border-box;
  background: #d30008;
  width: 6px;
  border-radius: 6px;
}
.gif{
  height: 50px;

  margin-bottom: 100px;
  margin-right: 0px;
}

</style>