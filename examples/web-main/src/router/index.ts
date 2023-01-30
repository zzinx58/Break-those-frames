import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

// 路由配置
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
