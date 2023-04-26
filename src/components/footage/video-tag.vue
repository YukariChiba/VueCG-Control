<template>
  <div class="main" v-if="getAttr('video-tag', 'enabled')">
    <span
      style="font-size: 50px; color: #ffffffcc; text-shadow: #000 0px 0px 2px"
      >{{ getAttr("video-tag", "text") }}</span
    >
  </div>
</template>

<script setup>
import { stateStore } from "@/store/Display/state";
const { getAttr } = stateStore();
</script>

<style scoped>
.main {
  position: fixed;
  top: 30px;
  right: 100px;
}
</style>
