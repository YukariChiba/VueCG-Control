<template>
  <v-app-bar>
    <v-app-bar-title> <b>VueCG</b> | Control </v-app-bar-title>
    <v-spacer />
    <v-select
      class="mr-6"
      :loading="loading"
      hide-details
      v-model="selected"
      :items="scenes"
      item-title="title"
      item-value="scene"
      label="Select a scene"
      persistent-hint
      single-line
      @update:model-value="switchScene"
    >
    </v-select>
  </v-app-bar>
</template>

<script setup>
import { reactive } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

let scenes = reactive([]);
const loading = ref(true);
const selected = ref(null);

fetch("http://127.0.0.1:8080/control/scene")
  .then((res) => {
    return res.json();
  })
  .then((j) => {
    Object.assign(scenes, j);
    loading.value = false;
  });

const router = useRouter();

const switchScene = () => {
  if (selected.value) router.push("/control/scene/" + selected.value);
};
</script>
