<template>
  <div class="card-container ma-6">
    <ComponentControl v-for="c in components" :key="c" :comp="c" />
    <AddComponent />
  </div>
</template>
<script setup>
import AddComponent from "@/components/Control/AddComponent.vue";
import ComponentControl from "@/components/Control/ComponentControl.vue";
import { sceneStore } from "@/store/Control/scene";
import { apiGetAttrs } from "@/utils/Control/api";
const components = sceneStore().components;
const fetchAttrs = () => {
  apiGetAttrs(sceneStore().scene).then((attrs) => {
    sceneStore().applyAttrs(attrs, false);
  });
};
fetchAttrs();
</script>

<style scoped>
.card-container {
  column-count: 3;
}

@media only screen and (max-width: 960px) {
  .card-container {
    column-count: 1;
  }
}

@media only screen and (max-width: 1264px) and (min-width: 960px) {
  .card-container {
    column-count: 2;
  }
}

.card-container .v-card {
  display: inline-block;
  width: 100%;
}
</style>
