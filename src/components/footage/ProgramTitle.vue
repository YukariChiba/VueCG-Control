<template>
  <XyzTransition xyz="fade left-100%">
    <div class="main" v-if="getEnabled('programtitle/enabled', true)">
      <v-card rounded="0" style="height: 160px" flat class="bgnews pa-3">
        <v-row
          style="height: 100%"
          class="ma-0"
          align="center"
          justify="space-between"
        >
          <v-col cols="3">
            <p
              style="
                font-weight: 800;
                font-size: 40px;
                line-height: 40px;
                color: white;
              "
            >
              BREAKING<br />NEWS
            </p>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </XyzTransition>
</template>

<script setup>
import { stateStore } from "@/store/state";
const { getEnabled } = stateStore();
</script>

<style scoped>
.main {
  position: fixed;
  bottom: 48px;
  left: 0;
  right: 0;
  z-index: 5;
}
.bgnews {
  background: linear-gradient(
    70deg,
    #ff4141 15%,
    #ff7b7b 15% 16.5%,
    #ffffff00 16.5%
  );
}
</style>
