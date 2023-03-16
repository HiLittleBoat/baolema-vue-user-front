import Vue from 'vue'
import VueRouter from 'vue-router'
import Upbar from '../components/Upbar.vue'
import LoginView from '../views/user/Login.vue'
import RegisterView from "@/views/user/Register.vue";
import Shoppingcartfooter from "@/views/shopingcart/Footer.vue";
import Order from "@/views/order/Order.vue";
import Pay from "@/views/order/Pay.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/user/pay',
        name: 'Pay',
        component: Pay
    },
    {
        path: '/user/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/user/upbar',
        name: 'Upbar',
        component: Upbar
    },
    {
        path: '/user/login',
        name: 'login',
        component: LoginView

    }
    ,
    {
        path: '/user/register',
        name: 'register',
        component: RegisterView

    },
    {
        path: '/user/menu',
        name: 'MenuIndex',
        component: () => import('../views/menu/MenuIndex.vue')
    },
    {
        path: '/user/shopingcart',
        name: 'ShopingCartfooter',
        component: Shoppingcartfooter
    }


]

const router = new VueRouter({
    routes
})

export default router
