export default [
    {
      path: "/",
      component: () => import("../components/MenuAbout.vue"),
    },
    {
      path: "/settings",
      component: () => import("../components/MenuSettings.vue"),
    },
    {
      path: "/feedback",
      component: () => import("../components/MenuFeedback.vue"),
    }
  ];