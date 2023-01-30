// 路由懒加载
const Start = () => import("@/views/start/Index.vue");
const Game = () => import("@/views/game/Index.vue");
const NotFound = () => import("@/views/not-found/Index.vue");

const routes = [
  // 游戏开始页面
  {
    path: "/",
    name: "home",
    component: Start,
  },
  {
    path: "/start",
    name: "start",
    component: Start,
  },

  // 游戏页面
  {
    path: "/game",
    name: "game",
    component: Game,
  },

  // 404
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
