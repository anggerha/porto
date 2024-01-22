import { createWebHistory, createRouter } from "vue-router";
import Profile from "../Profile.vue";
import Project from "../Project.vue"

const routes = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/Project",
    name: "Project",
    component: Project,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;