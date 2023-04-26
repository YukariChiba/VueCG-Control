<template>
  <v-container>
    <v-card class="my-1" title="Select your footage:">
      <v-card-actions>
        <v-select
          :loading="loading"
          hide-details
          v-model="selected"
          :items="scenes"
          item-title="title"
          item-value="scene"
          label="Select a scene"
          persistent-hint
          single-line
        >
        </v-select>
      </v-card-actions>
      <v-card-actions>
        <v-btn :disabled="!selected" color="primary" block @click="selectScene"
          >Enter</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-card class="my-1" title="Special scene:">
      <v-card-actions>
        <v-btn color="primary" @click="router.push('/display/special/pm5544')">
          PM5544
        </v-btn>
        <v-btn color="primary"> Program Intro </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { reactive } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

let scenes = reactive([]);
const loading = ref(true);
const selected = ref(null);

const selectScene = () => {
  router.push("/display/footage/" + selected.value);
};
fetch("http://127.0.0.1:8080/display/scene")
  .then((res) => {
    return res.json();
  })
  .then((j) => {
    Object.assign(scenes, j);
    loading.value = false;
  });
</script>
