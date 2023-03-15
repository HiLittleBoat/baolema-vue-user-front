<template>
  <div>
    <!--  引入顶部导航栏  -->
    <Upbar></Upbar>
    <!-- 菜品主页  -->
    <b-container fluid id="menu">
      <b-row>
        <b-col cols="3">
          <div id="list-nav" style="width: 100%; height: 800px">
            <!--            <b-nav pills vertical class="nav flex-column">-->
            <!--&lt;!&ndash;              <b-scrollspy v-model="activeSection" class="menu-sidebar">  :active="activeSection === section.id"&ndash;&gt;-->
            <!--                  <b-nav-item v-for="(category, index) in categories" :key="index" :href="`#${category.id}`"-->
            <!--                              class="menu-section" >{{ category.category }}-->
            <!--                  </b-nav-item>-->
            <!--&lt;!&ndash;              </b-scrollspy>&ndash;&gt;-->
            <!--            </b-nav>-->
            <b-list-group v-b-scrollspy:listgroup-ex>-->
              <b-list-group-item class="list-nav-item" v-for="(category, index) in categories" :key="index" :href="`#${category.id}`"
                                    :active="activeSection === category.id" >
                {{ category.name }}
              </b-list-group-item>
            </b-list-group>
          </div>
        </b-col>
        <b-col cols="9">
          <div id="listgroup-ex" class="menu-content">
            <div v-for="(category, index) in categories" :key="index" :id="category.id" class="menu-section" style="position:relative; overflow-y:auto; height:800px" >
<!--              <h3>{{ category.name }}</h3>-->
              <b-row>
                <div class="card" v-for="(dish,index2) in category.dishes" :key="index2">
                  <img class="card-img-top" :src="dish.image" :alt="dish.name">
                  <div class="card-body">
                    <h5 class="card-title">{{ dish.name }}</h5>
                    <p class="card-text">{{ dish.description }}</p>
                    <p class="card-text">价格：{{ dish.price }}元</p>
                    <button class="btn btn-primary" @click="addToCart(dish)">加入购物车</button>
                  </div>
                </div>
<!--                <menu-item v-for="dish in category.dishes" :key="dish.id" :item="dish"></menu-item>-->
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>


    <!--    <b-container fluid id="menu">-->
    <!--      <b-row>-->
    <!--        &lt;!&ndash;   菜品导航     &ndash;&gt;-->
    <!--        <b-col cols="3">-->
    <!--          <div id="list-nav" style="width: 100%; height: 800px">-->
    <!--            <b-list-group v-b-scrollspy:listgroup-ex>-->
    <!--              <b-list-group-item class="list-nav-item" v-for="(category, index) in categories" :key="index"-->
    <!--                                 href="`#${category.id}`" :active="activeSection === category.id">-->
    <!--                {{ category.category }}-->
    <!--              </b-list-group-item>-->
    <!--            </b-list-group>-->
    <!--          </div>-->
    <!--        </b-col>-->
    <!--        &lt;!&ndash;菜品内容&ndash;&gt;-->
    <!--        <b-col cols="9">-->
    <!--          <div id="listgroup-ex" v-for="(category,index) in categorys" :key="index"-->
    <!--               style="position:relative; overflow-y:auto; height:800px" :id="category.id" class="menu-section">-->
    <!--            <h4>{{category.category}}</h4>-->
    <!--            <div class="card" v-for="(food,index2) in category.foods" :key="index2">-->
    <!--              <img class="card-img-top" :src="food.image" :alt="food.name">-->
    <!--              <div class="card-body">-->
    <!--                <h5 class="card-title">{{ food.name }}</h5>-->
    <!--                <p class="card-text">{{ food.description }}</p>-->
    <!--                <p class="card-text">价格：{{ food.price }}元</p>-->
    <!--                <button class="btn btn-primary" @click="addToCart(food)">加入购物车</button>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            &lt;!&ndash;            <h4 id="list-item-1">Item 1</h4>&ndash;&gt;-->
    <!--            &lt;!&ndash;            <ul>&ndash;&gt;-->
    <!--            &lt;!&ndash;              <li></li>&ndash;&gt;-->
    <!--            &lt;!&ndash;            </ul>&ndash;&gt;-->
    <!--            &lt;!&ndash;            <h4 id="list-item-2">Item 2</h4>&ndash;&gt;-->
    <!--            &lt;!&ndash;            <p>{{ text }}</p>&ndash;&gt;-->
    <!--            &lt;!&ndash;            <h4 id="list-item-3">Item 3</h4>&ndash;&gt;-->
    <!--            &lt;!&ndash;            <p>{{ text }}</p>&ndash;&gt;-->
    <!--            &lt;!&ndash;            <h4 id="list-item-4">Item 4</h4>&ndash;&gt;-->
    <!--            &lt;!&ndash;            <p>{{ text }}</p>&ndash;&gt;-->
    <!--            &lt;!&ndash;            <h4 id="list-item-5">Item 5</h4>&ndash;&gt;-->
    <!--            &lt;!&ndash;            <p>{{ text }}</p>&ndash;&gt;-->
    <!--          </div>-->
    <!--        </b-col>-->
    <!--      </b-row>-->
    <!--    </b-container>-->
    <!--  菜品主页结束  -->
    <!--   底部购物车 -->
    <Shoppingcartfooter></Shoppingcartfooter>

  </div>
</template>

<script>
import {BListGroup, BListGroupItem, BSidebar} from 'bootstrap-vue'
import Upbar from "@/components/Upbar.vue";
import Shoppingcartfooter from "@/views/shopingcart/Footer.vue";


export default {
  name: "MenuIndex",
  components: {
    Upbar,
    Shoppingcartfooter
  },
  data() {
    return {
      activeSection: null, //不知道干嘛的在目录那边有用到
      currentCategory: '', // 当前分类
      categories: [
        {
          id: 1,
          name: "汉堡",
          dishes: [
            {
              id: 1,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 2,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            // {
            //   id: 3,
            //   name: "汉堡",
            //   description: "汉堡",
            //   image: "https://img.yzcdn.cn/vant/cat.jpeg",
            //   price: 10,
            //   stock: 100
            // },
            // {
            //   id: 4,
            //   name: "汉堡",
            //   description: "汉堡",
            //   image: "https://img.yzcdn.cn/vant/cat.jpeg",
            //   price: 10,
            //   stock: 100
            // },
            // {
            //   id: 5,
            //   name: "汉堡",
            //   description: "汉堡",
            //   image: "https://img.yzcdn.cn/vant/cat.jpeg",
            //   price: 10,
            //   stock: 100
            // },
            // {
            //   id: 6,
            //   name: "汉堡",
            //   description: "汉堡",
            //   image: "https://img.yzcdn.cn/vant/cat.jpeg",
            //   price: 10,
            //   stock: 100
            // },
            // {
            //   id: 7,
            //   name: "汉堡",
            //   description: "汉堡",
            //   image: "https://img.yzcdn.cn/vant/cat.jpeg",
            //   price: 10,
            //   stock: 100
            // },
            // {
            //   id: 8,
            //   name: "汉堡",
            //   description: "汉堡",
            //   image: "https://img.yzcdn.cn/vant/cat.jpeg",
            //   price: 10,
            //   stock: 100
            // }
          ]
        },
        {
          id: 2,
          name: "汉堡2",
          image: "https://img.yzcdn.cn/vant/cat.jpeg",
          dishes: [
            {
              id: 1,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 2,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 3,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 4,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 5,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 6,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 7,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 8,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            }
          ]
        },
        {
          id: 3,
          name: "汉堡3",
          image: "https://img.yzcdn.cn/vant/cat.jpeg",
          dishes: [
            {
              id: 1,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 2,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 3,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 4,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 5,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 6,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 7,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            },
            {
              id: 8,
              name: "汉堡",
              description: "汉堡",
              image: "https://img.yzcdn.cn/vant/cat.jpeg",
              price: 10,
              stock: 100
            }
          ]
        },
      ]

    }
  },
  methods: {
    categoryClick(index,id,name){
      this.activeType = index
      this.categoryId = id
      if(name === 1){//菜品
        this.getDishList()
      }else{
        this.getSetmealData()
      }
    },
  }
}


</script>

<style scoped>
#menu {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  box-sizing: border-box;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0px;
  padding-right: 0px;
  margin-right: 0px;
  margin-left: 0px;
  height: calc(100% - 10rem);
  width: 100%;
  overflow-y: auto;
  display: block !important;
}

.list-nav-item {

  --bs-list-group-color: #212529;
  --bs-list-group-bg: null;
  --bs-list-group-border-color: null; /*rgba(0, 0, 0, 0.125) */
  --bs-list-group-border-width: 1px;
  --bs-list-group-border-radius: 0.375rem;
  --bs-list-group-item-padding-x: 1rem;
  --bs-list-group-item-padding-y: 0.5rem;
  --bs-list-group-action-color: #495057;
  --bs-list-group-action-hover-color: #495057;
  --bs-list-group-action-hover-bg: #f8f9fa;
  --bs-list-group-action-active-color: #212529;
  --bs-list-group-action-active-bg: #e9ecef;
  --bs-list-group-disabled-color: #6c757d;
  --bs-list-group-disabled-bg: #fff;
  --bs-list-group-active-color: #fff;
  --bs-list-group-active-bg: #ffcd56;
  --bs-list-group-active-border-color: #ffcd56;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  margin-bottom: 0;
  border-radius: var(--bs-list-group-border-radius);

}

</style>