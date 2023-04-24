<template>
  <div>
    <tv-corner-logo />
    <tv-bottom-bar />
    <tv-program-title />
    <tv-program-topic />
    <tv-video-tag />
    <tv-test-module />
  </div>
</template>

<script>
import { socketStore } from "../store/socket";

export default {
  mounted() {
    socketStore().initSSE(this);
  },
};
</script>
