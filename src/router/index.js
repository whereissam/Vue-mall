import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../view/home/Home");
const Category = () => import("../view/category/Category");
const Cart = () => import("../view/cart/Cart");
const Profile = () => import("../view/profile/Profile");
const Detail = () => import("../view/detail/Detail");

//1.install plugins
Vue.use(VueRouter);

//2.create router
const routes = [
  // {
  //   path: "",
  //   redirect: "/home"
  // },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/detail",
    component: Detail
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

//3. export router
export default router;
