<template>
  <div class="main" v-if="getEnabled('cornerlogo/enabled', true)">
    <v-card flat theme="dark">
      <v-row no-gutter class="glow">
        <v-col class="pr-0">
          <v-img id="logo" :src="logo" width="80px" />
        </v-col>
        <v-col style="width: 20px"></v-col>
        <v-col class="pl-0 pr-6" style="align-self: center">
          <span style="font-size: 50px; text-shadow: #000 0px 0px 2px">{{
            getAttr("cornerlogo/text", "TV")
          }}</span>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
import logo from "@/assets/footage/logo.png";
import { stateStore } from "@/store/state";
const { getAttr, getEnabled } = stateStore();
</script>
<style scoped>
.main {
  position: fixed;
  top: 30px;
  left: 30px;
}

.glow {
  filter: drop-shadow(0px 0px 2px white);
}
.v-card {
  /* background: unset !important; */
  background: rgba(255, 255, 255, 0.2);
}
</style>
