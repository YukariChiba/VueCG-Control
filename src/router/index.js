// Composables
import { createRouter, createWebHistory } from "vue-router";
import { stateStore } from "@/store/state";
import { socketStore } from "@/store/socket";

const routes = [
  {
    path: "/",
    component: () => import("@/views/HomeView.vue"),
    name: "Home",
  },
  {
    path: "/footage/:scene",
    component: () => import("@/views/FootageView.vue"),
    name: "Footage",
  },
  {
    path: "/special/schedule",
    component: () => import("@/views/ScheduleView.vue"),
    name: "Schedule",
  },
  {
    path: "/special/pm5544",
    component: () => import("@/views/PM5544View.vue"),
    name: "PM5544",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  socketStore().closeSSE();
  stateStore().resetScene();
  if (to.params?.scene) stateStore().scene = to.params.scene;
});

export default router;
