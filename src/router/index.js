// Composables
import { createRouter, createWebHistory } from "vue-router";
import { stateStore } from "@/store/Display/state";
import { socketStore } from "@/store/Display/socket";
import { sceneStore } from "@/store/Control/scene";

const routes = [
  {
    path: "/",
    component: () => import("@/views/HomeView.vue"),
    name: "Home",
  },
  {
    path: "/control/",
    component: () => import("@/layout/ControlLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/Control/HomeView.vue"),
        name: "Control/Home",
      },
      {
        path: "scene/:scene",
        component: () => import("@/views/Control/SceneView.vue"),
        name: "Control/Scene",
      },
    ],
  },
  {
    path: "/display/",
    component: () => import("@/layout/DisplayLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/Display/HomeView.vue"),
        name: "Display/Home",
      },
      {
        path: "footage/:scene",
        component: () => import("@/views/Display/FootageView.vue"),
        name: "Display/Footage",
      },
      {
        path: "special/schedule",
        component: () => import("@/views/Display/ScheduleView.vue"),
        name: "Display/Schedule",
      },
      {
        path: "special/pm5544",
        component: () => import("@/views/Display/PM5544View.vue"),
        name: "Display/PM5544",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  if (from.name === "Display/Footage") {
    socketStore().closeSSE();
    stateStore().resetScene();
  }
  if (to.name === "Display/Footage") stateStore().scene = to.params.scene;
  if (to.name === "Control/Scene") sceneStore().scene = to.params.scene;
});

export default router;
