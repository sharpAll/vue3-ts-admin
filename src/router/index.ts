import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Layout from "/@/components/Layout.vue";
import Home from "/@/views/home/index.vue";
import Login from "/@/views/login/index.vue";
import Redirect from "/@/views/redirect/index.vue";
import StrategyList from "/@/views/strategy/list/index.vue";
import StrategyDetail from "/@/views/strategy/detail/index.vue";

export const RedirectRoute = {
  path: "/redirect",
  name: "Redirect",
  component: Layout,
  meta: {
    title: "Redirect",
    hideBreadcrumb: true,
  },
  children: [
    {
      path: "/redirect/:path(.*)",
      name: "Redirect",
      component: Redirect,
      meta: {
        title: "Redirect",
        hideBreadcrumb: true,
        isCached: false,
      },
    },
  ],
};

const routes = [
  RedirectRoute,
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        meta: {
          title: "首页",
          affix: true,
        },
        component: Home,
      },
      {
        path: "/strategy/list",
        name: "StrategyList",
        meta: {
          title: "策略列表",
        },
        component: StrategyList,
      },
      {
        path: "/strategy/detail/:id",
        name: "StrategyDetail",
        meta: {
          title: "策略详情",
        },
        component: StrategyDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
