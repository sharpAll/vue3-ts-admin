<template>
  <div class="w-full h-full component-content p-5">
    <div class="title-box">
      <span class="title">笃诚{{ id }}号</span>
      <n-switch v-model:value="switchRun" class="ml-5 -mt-1" />
      <div class="float-right">
        <n-space>
          <n-button type="primary" class="clear-both" @click="createStrategy">
            <template #icon>
              <n-icon>
                <EditOutlined />
              </n-icon>
            </template>
            编辑</n-button
          >
          <n-button type="primary" class="clear-both">
            <template #icon>
              <n-icon>
                <DollarCircleOutlined />
              </n-icon>
            </template>
            交易</n-button
          >
        </n-space>
      </div>
    </div>
    <div class="total-box">
      <div class="item red">
        <div class="top">99.99%</div>
        <div class="bottom">累计收益</div>
      </div>
      <div class="item red">
        <div class="top">99.99%</div>
        <div class="bottom">年化收益</div>
      </div>
      <div class="item">
        <div class="top">￥119787.45</div>
        <div class="bottom">总资产</div>
      </div>
      <div class="item">
        <div class="top">￥119787.45</div>
        <div class="bottom">可用资金</div>
      </div>
      <div class="item">
        <div class="top">0.00%</div>
        <div class="bottom">仓位占比</div>
      </div>
      <div class="item">
        <div class="top">0.010</div>
        <div class="bottom">夏普比率</div>
      </div>
      <div class="item">
        <div class="top">29.60%</div>
        <div class="bottom">最大回撤</div>
      </div>
    </div>
    <n-drawer v-model:show="active" :width="600" :mask-closable="false">
      <n-drawer-content title="编辑策略" closable>
        <StrategyForm />
        <template #footer>
          <n-space>
            <n-button @click="closeStrategy">取消</n-button>
            <n-button type="primary">确定</n-button>
          </n-space>
        </template>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { EditOutlined, DollarCircleOutlined } from "@vicons/antd";
import StrategyForm from "../components/strategyForm.vue";
const route = useRoute();
const id = ref(route.params.id);
const switchRun = ref(true);
const active = ref(false);
const createStrategy = () => {
  active.value = true;
};
const closeStrategy = () => {
  active.value = false;
};
</script>
<style scoped lang="scss">
.title-box {
  height: 40px;
  line-height: 40px;
  .title {
    padding-left: 20px;
    font-size: 21px;
    position: relative;
    &::before {
      position: absolute;
      left: 0;
      top: 4px;
      content: "";
      display: block;
      width: 4px;
      height: 20px;
      background: #0b365e;
    }
  }
}
.total-box {
  @apply mt-10px border divide-gray-400 py-5 flex;
  .item {
    @apply flex-1 text-center;
    .top {
      font-size: 22px;
      line-height: 30px;
    }
    .bottom {
      font-size: 15px;
      line-height: 30px;
      color: #666;
    }
    &.red {
      .top,
      .bottom {
        @apply text-red-500;
      }
    }
  }
}
</style>
