<template>
  <XyzTransition xyz="fade left-100%">
    <div class="main" v-if="getAttr('program-topic', 'enabled')">
      <v-card rounded="0" style="height: 160px" flat class="bgnews pa-3">
        <v-row style="height: 100%" class="ma-0 ml-6" align="center">
          <v-col cols="2" class="mb-2"> </v-col>
          <v-col cols="auto">
            <p style="font-size: 60px; line-height: 60px">
              {{ getAttr("program-topic", "title", "this is title") }}
            </p>
            <v-divider class="my-2" :thickness="4" />
            <p style="font-size: 40px; line-height: 40px">
              {{ getAttr("program-topic", "subtitle", "this is subtitle") }}
            </p>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </XyzTransition>
</template>

<script setup>
import { stateStore } from "@/store/Display/state";
const { getAttr } = stateStore();
</script>

<style scoped>
.main {
  position: fixed;
  bottom: 48px;
  left: 0;
  right: 0;
}
.bgnews {
  background: linear-gradient(70deg, #ffffff 80%, #ffffff00 80%);
}
</style>
