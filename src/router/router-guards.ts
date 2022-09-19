import { Router } from "vue-router";
import { useAsyncRouteStore } from "/@/store/asyncRoute";
import { WhiteList } from "/@/enums/pageEnum";
import { useTabsViewStore } from "/@/store/tabsView";

export default function createRouterGuards(router: Router) {
  const asyncRouteStore = useAsyncRouteStore();
  router.afterEach((to) => {
    document.title = `组件库|${to?.meta?.title}`;
    // 在这里设置需要缓存的组件名称
    const currentComName: any = to.matched.find(
      (item) => item.name === to.name
    )?.name;
    const tabsViewStore = useTabsViewStore();
    const keepAliveComponentsTemp: string[] = [];
    for (let i = 0; i < tabsViewStore.tabsList.length; i++) {
      if (!WhiteList.includes(tabsViewStore.tabsList[i].name)) {
        keepAliveComponentsTemp.push(tabsViewStore.tabsList[i].name);
      }
    }
    if (
      !WhiteList.includes(currentComName) &&
      !keepAliveComponentsTemp.includes(currentComName)
    ) {
      keepAliveComponentsTemp.push(currentComName);
    }
    asyncRouteStore.setKeepAliveComponents(keepAliveComponentsTemp);
  });

  router.onError((error) => {
    console.log(error, "路由错误");
  });
}
