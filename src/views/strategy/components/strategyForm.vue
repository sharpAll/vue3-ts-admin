<template>
  <n-form label-placement="left" :label-width="100" :model="strategyForm">
    <n-form-item label="策略名称" path="user.name">
      <n-input v-model:value="strategyForm.name" placeholder="请填写策略名称" />
    </n-form-item>
    <n-form-item label="策略类型" path="user.name">
      <n-select
        v-model:value="strategyForm.name"
        :options="strategyOptions"
        placeholder="请选择"
      />
    </n-form-item>
    <n-form-item label="标的类型" path="user.name">
      <n-select
        v-model:value="strategyForm.name"
        :options="targetOptions"
        placeholder="请选择"
      />
    </n-form-item>
    <n-form-item label="策略描述" path="user.name">
      <n-input
        v-model:value="strategyForm.name"
        placeholder="请填写策略描述"
        type="textarea"
        :autosize="{
          minRows: 3,
          maxRows: 5,
        }"
      />
    </n-form-item>
    <n-form-item label="账户资金" path="user.name">
      <n-input-number v-model:value="strategyForm.name" placeholder="" />
    </n-form-item>
    <n-form-item label="手续费用" path="user.name">
      <n-input-number v-model:value="strategyForm.name" placeholder="" />
    </n-form-item>
    <n-form-item label="滑点设置" path="user.name">
      <n-input-number
        v-model:value="strategyForm.name"
        placeholder=""
        class="w-215px"
      >
        <template #suffix> tick </template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="关联报告" path="user.name">
      <n-input v-model:value="strategyForm.name" placeholder="请填写策略名称" />
    </n-form-item>
    <n-form-item label="关联模板" path="user.name">
      <n-input v-model:value="strategyForm.name" placeholder="请填写策略名称" />
    </n-form-item>
    <n-form-item label="关联指标" path="user.name">
      <n-input v-model:value="strategyForm.name" placeholder="请填写策略名称" />
    </n-form-item>
  </n-form>
</template>
<script setup lang="ts">
import { ref, h } from "vue";
const strategyForm = ref({
  name: null,
});
const strategyOptions = [
  {
    label: "月差策略",
    value: "月差策略",
  },
  {
    label: "基差策略",
    value: "基差策略",
  },
];
const targetOptions = [
  {
    label: "股票",
    value: "股票",
  },
  {
    label: "期货",
    value: "期货",
  },
];
</script>
