<template>
  <v-app>
    <v-app-bar v-if="useRoute().name === 'Display/Home'">
      <v-app-bar-title> <b>VueCG</b> | Display </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
.v-application {
  background-color: unset !important;
}
</style>

<script setup>
import { useRoute } from "vue-router";
</script>
