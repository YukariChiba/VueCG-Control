<template>
  <v-btn
    @click="switchVal"
    size="x-large"
    variant="flat"
    :color="
      sceneStore().getAttr(props.comp, props.attr) ? 'success' : 'error'
    "
  >
    {{
      sceneStore().getAttr(props.comp, props.attr)
        ? "Enabled"
        : "Disabled"
    }}
  </v-btn>
</template>

<script setup>
import { sceneStore } from "@/store/Control/scene";
const props = defineProps(["attr", "comp"]);
const switchVal = () => {
  sceneStore().setAttr(
    props.comp,
    props.attr,
    !sceneStore().getAttr(props.comp, props.attr)
  );
};
</script>
