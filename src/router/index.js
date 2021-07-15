import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Admin from "../views/Admin.vue";
import Dashboard from "../views/Dashboard.vue";
import Customer from "../views/Customer.vue";
import Room from "../views/Room.vue";
import Company from "../views/Company.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/room",
    name: "Room",
    component: Room,
  },
  {
    path: "/customer",
    name: "Customer",
    component: Customer,
  },
  {
    path: "/company",
    name: "Company",
    component: Company,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
