<template>
  <v-app-bar>
    <v-app-bar-title> <b>VueCG</b> | Display </v-app-bar-title>
  </v-app-bar>
  <v-container>
    <v-card class="my-1" title="Select your footage:">
      <v-card-actions>
        <v-select
          hide-details
          v-model="selected"
          :items="demo_items"
          item-title="title"
          item-value="id"
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
        <v-btn color="primary" @click="router.push('/special/pm5544')">
          PM5544
        </v-btn>
        <v-btn color="primary"> Program Intro </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const demo_items = [
  {
    title: "test",
    id: "114514",
  },
];
const selected = ref(null);

const selectScene = () => {
  router.push("/footage/" + selected.value);
};
</script>
