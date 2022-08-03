<template>
  <div class="w-full h-full component-content p-5">
    <n-form
      label-placement="left"
      :label-width="100"
      :model="formValue"
      class="border-b divide-gray-200 mb-5"
    >
      <n-grid>
        <n-gi :span="4"
          ><n-form-item label="研究员名称" path="user.name">
            <n-input
              v-model:value="formValue.user.name"
              placeholder="可选择研究员"
            />
          </n-form-item>
        </n-gi>
        <n-gi :span="4"
          ><n-form-item label="策略名称" path="user.age">
            <n-input
              v-model:value="formValue.user.age"
              placeholder="可选择策略"
            />
          </n-form-item>
        </n-gi>
        <n-gi :span="6"
          ><n-form-item label="品种名称" path="phone">
            <n-input
              v-model:value="formValue.phone"
              placeholder="可选择品种名称"
            />
          </n-form-item>
        </n-gi>
        <n-gi :span="6"
          ><n-form-item label="年化收益" path="benefit">
            <n-input
              v-model:value="formValue.benefit"
              placeholder="可选择年化收益"
            />
          </n-form-item>
        </n-gi>
        <n-gi :span="4"
          ><n-form-item class="float-right">
            <n-button type="primary">
              <template #icon>
                <n-icon>
                  <SearchOutlined />
                </n-icon> </template
              >搜索</n-button
            >
          </n-form-item>
        </n-gi>
      </n-grid>
    </n-form>
    <div class="float-right clear-both mb-5">
      <n-button type="primary" class="clear-both" @click="createStrategy">
        <template #icon>
          <n-icon>
            <PlusOutlined />
          </n-icon>
        </template>
        新增策略</n-button
      >
    </div>
    <n-data-table
      :columns="createColumns()"
      :data="data"
      :pagination="false"
      :max-height="'calc(100vh - 350px)'"
    />
    <n-drawer v-model:show="active" :width="600" :mask-closable="false">
      <n-drawer-content title="创建策略" closable>
        <StrategyForm />
        <template #footer>
          <n-space>
            <n-button @click="closeStrategy">取消</n-button>
            <n-button type="primary">创建</n-button>
          </n-space>
        </template>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>
<script setup lang="ts">
import { ref, h } from "vue";
import { SearchOutlined, PlusOutlined } from "@vicons/antd";
import { NButton, NTag } from "naive-ui";
import { useRouter } from "vue-router";
import StrategyForm from "../components/strategyForm.vue";
const formValue = ref({
  user: {
    name: "",
    age: "",
  },
  phone: "",
  benefit: "",
});
const router = useRouter();
const go = (id: number) => {
  router.push(`/strategy/detail/${id}`);
};
const createColumns = () => {
  return [
    {
      title: "策略名称",
      key: "name",
    },
    {
      title: "创建人",
      key: "person",
    },
    {
      title: "最新净值",
      key: "new_count",
    },
    {
      title: "年化收益率",
      key: "year",
      render(row: any) {
        return h(
          "span",
          {
            class: row.year > 0 ? "text-red-500" : "text-green-500",
            bordered: false,
          },
          {
            default: () => `${row.year}%`,
          }
        );
      },
    },
    {
      title: "近一个月",
      key: "one_month",
      render(row: any) {
        return h(
          "span",
          {
            class: row.one_month > 0 ? "text-red-500" : "text-green-500",
            bordered: false,
          },
          {
            default: () => `${row.one_month}%`,
          }
        );
      },
    },
    {
      title: "近三个月",
      key: "three_month",
      render(row: any) {
        return h(
          "span",
          {
            class: row.three_month > 0 ? "text-red-500" : "text-green-500",
            bordered: false,
          },
          {
            default: () => `${row.three_month}%`,
          }
        );
      },
    },
    {
      title: "资金规模",
      key: "total",
    },
    {
      title: "状态",
      key: "status",
      render(row: any) {
        return h(
          NTag,
          {
            type: row.status === 1 ? "info" : "error",
            bordered: false,
          },
          {
            default: () => (row.status === 1 ? "执行中" : "暂停"),
          }
        );
      },
    },
    {
      title: "操作",
      key: "action",
      render(row: any) {
        return h(
          NButton,
          {
            text: true,
            type: "primary",
            onClick: () => go(row.id),
          },
          { default: () => "查看详情" }
        );
      },
    },
  ];
};
const data = ref([
  {
    id: 1,
    name: "笃诚1号",
    person: "褚锴军",
    new_count: 500.0,
    year: 60.0,
    one_month: -20.0,
    three_month: 40,
    total: 2000000,
    status: 1,
  },
  {
    id: 2,
    name: "笃诚2号",
    person: "毛周俊鹏",
    new_count: 500.0,
    year: 60.0,
    one_month: -20.0,
    three_month: 40,
    total: 2000000,
    status: 1,
  },
  {
    id: 3,
    name: "笃诚3号",
    person: "张洵",
    new_count: 500.0,
    year: 60.0,
    one_month: -20.0,
    three_month: 40,
    total: 2000000,
    status: 0,
  },
  {
    id: 4,
    name: "笃诚4号",
    person: "唐晨",
    new_count: 500.0,
    year: 60.0,
    one_month: -20.0,
    three_month: 40,
    total: 2000000,
    status: 1,
  },
  {
    id: 5,
    name: "笃诚5号",
    person: "吴超群",
    new_count: 500.0,
    year: 60.0,
    one_month: -20.0,
    three_month: 40,
    total: 2000000,
    status: 0,
  },
]);
const active = ref(false);
const createStrategy = () => {
  active.value = true;
};
const closeStrategy = () => {
  active.value = false;
};
</script>
<style scoped lang="scss"></style>
