import type { App } from "vue";
import {
  create,
  NMessageProvider,
  NDialogProvider,
  NGrid,
  NGridItem,
  NSpace,
  NButton,
  NIcon,
  NDropdown,
  NForm,
  NFormItem,
  NInput,
  NInputNumber,
  NSelect,
  NSwitch,
  NCheckbox,
  NDataTable,
  NDrawer,
  NDrawerContent,
} from "naive-ui";
import "vfonts/Lato.css";

const naive = create({
  components: [
    NMessageProvider,
    NDialogProvider,
    NGrid,
    NGridItem,
    NSpace,
    NButton,
    NIcon,
    NDropdown,
    NForm,
    NFormItem,
    NInput,
    NInputNumber,
    NSelect,
    NSwitch,
    NCheckbox,
    NDataTable,
    NDrawer,
    NDrawerContent,
  ],
});

export function installNaiveUI(app: App<Element>) {
  app.use(naive);
}
