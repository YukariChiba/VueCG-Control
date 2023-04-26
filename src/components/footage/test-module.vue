<template>
  <div>
    <div class="main" v-if="getAttr('test-module', 'enabled')">
      <span style="font-size: 300px; color: #cccccccc">{{
        getAttr("test-module", "test")
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { stateStore } from "@/store/Display/state";
const { getAttr } = stateStore();
</script>

<style scoped>
.main {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
