import {
  type Router,
  createRouter,
  type RouteRecordRaw,
  type RouteComponent,
} from "vue-router";
import remainingRouter from "./modules/remaining";
import {
  ascending,
  getHistoryMode,
  formatTwoStageRoutes,
  formatFlatteningRoutes,
} from "./utils";

import { buildHierarchyTree } from "@/utils/tree";

/** 原始静态路由 */
const routes = [];

/* 导出处理后的静态路由(三级及以上的路由全部拍成二级) */
export const constantRoutes: Array<RouteRecordRaw> = formatTwoStageRoutes(
  formatFlatteningRoutes(buildHierarchyTree(ascending(routes.flat(Infinity))))
);

/* 创建路由实例 */
export const router: Router = createRouter({
  history: getHistoryMode(import.meta.env.VITE_ROUTER_HISTORY),
  routes: constantRoutes.concat(...(remainingRouter as any)),
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.saveSrollTop) {
          const top: number =
            document.documentElement.scrollTop || document.body.scrollTop;
          resolve({ left: 0, top });
        }
      }
    });
  },
});

/* 路由白名单 */
const whiteList = ["/login"];

router.beforeEach((to: ToRouteType, _from, next) => {});

router.afterEach(() => {});

export default router;
