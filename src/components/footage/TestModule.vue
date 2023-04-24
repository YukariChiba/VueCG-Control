<template>
  <div class="main" v-if="getEnabled('test/enabled', false)">
    <span style="font-size: 300px; color: #cccccccc">{{
      getAttr("test/test", "测试")
    }}</span>
  </div>
</template>

<script setup>
import { stateStore } from "@/store/state";
const { getEnabled, getAttr } = stateStore();
</script>

<style scoped>
.main {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
