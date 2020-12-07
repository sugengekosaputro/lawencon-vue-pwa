import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import CartPage from "@/views/CartPage.vue"
import FoodPage from "@/views/FoodPage.vue"
import MainPage from "@/views/MainPage.vue"
import SuccessPage from "@/views/SuccessPage.vue"
import FoodOrder from "@/components/FoodOrder.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
    children: [
      {
        title: "Halaman Utama",
        path: "/",
        name: "MainPage",
        component: MainPage
      },
      {
        title: "Food",
        path: "/foods",
        name: "FoodPage",
        component: FoodPage
      },
      {
        title: "Food",
        path: "/food/:id",
        name: "FoodOrder",
        component: FoodOrder
      },
      {
        title: "Keranjang",
        path: "/cart",
        name: "Cart",
        component: CartPage
      },
      {
        title: "SuccessPage",
        path: "/success",
        name: "Success",
        component: SuccessPage
      },
    ]
  },
  {
    path: "/login",
    name: "FoodOrder",
    component : FoodOrder
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;