<template>
  <div>
    <!--  引入顶部导航栏  -->
    <Upbar></Upbar>
    <!-- 菜品主页  -->
    <b-container fluid id="menu">
      <b-row>
        <!--   菜品导航     -->
        <b-col cols="3">
          <div id="list-nav" style="width: 100%; height: 500px">
            <b-list-group v-b-scrollspy:listgroup-ex>
              <b-list-group-item href="#list-item-1" class="list-nav-item">Item 1</b-list-group-item>
              <b-list-group-item href="#list-item-2" class="list-nav-item">Item 2</b-list-group-item>
              <b-list-group-item href="#list-item-3" class="list-nav-item">Item 3</b-list-group-item>
              <b-list-group-item href="#list-item-4" class="list-nav-item">Item 4</b-list-group-item>
              <b-list-group-item href="#list-item-5" class="list-nav-item">Item 5</b-list-group-item>
            </b-list-group>
          </div>
        </b-col>
        <!--菜品内容-->
        <b-col cols="9">
          <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:500px">
            <h4 id="list-item-1">Item 1</h4>
            <p>{{ text }}</p>
            <h4 id="list-item-2">Item 2</h4>
            <p>{{ text }}</p>
            <h4 id="list-item-3">Item 3</h4>
            <p>{{ text }}</p>
            <h4 id="list-item-4">Item 4</h4>
            <p>{{ text }}</p>
            <h4 id="list-item-5">Item 5</h4>
            <p>{{ text }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
      text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `
    }
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
  padding-left:0px ;
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