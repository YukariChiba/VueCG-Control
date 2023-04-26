<template>
  <div>
    <tv-program-topic />
    <tv-video-tag />
    <tv-program-title />
    <tv-bottom-bar />
    <tv-test-module />
    <tv-corner-logo />
  </div>
</template>

<script>
import { socketStore } from "../../store/Display/socket";

export default {
  mounted() {
    socketStore().initSSE(this);
  },
};
</script>
