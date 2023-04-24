<template>
  <div class="main" v-if="getEnabled('videotag/enabled', false)">
    <span
      style="font-size: 50px; color: #ffffffcc; text-shadow: #000 0px 0px 2px"
      >{{ getAttr("videotag/text", "直播 / LIVE") }}</span
    >
  </div>
</template>

<script setup>
import { stateStore } from "@/store/state";
const { getAttr, getEnabled } = stateStore();
</script>

<style scoped>
.main {
  position: fixed;
  top: 30px;
  right: 100px;
}
</style>
