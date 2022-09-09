import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/create-users",
    name: "create",
    component: () => import("../views/CreateUsers.vue"),
  },
  {
    path: "/manage-users",
    name: "manage",
    component: () => import("../views/ManageUsers.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
