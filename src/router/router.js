import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;