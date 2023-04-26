<template>
  <v-card
    :title="componentStore().getTitle(c)"
    :subtitle="componentStore().getSubtitle(c)"
  >
    <v-card-text>test</v-card-text>
    <v-divider />
    <v-card-actions>
      <EnableSwitch :comp="c" attr="enabled" />
      <v-spacer />
      <v-btn @click="removeComp" color="error" icon>
        <v-icon icon="mdi-trash-can" />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { componentStore } from "@/store/component";
import EnableSwitch from "./EnableSwitch.vue";
import { sceneStore } from "@/store/Control/scene";

export default {
  props: {
    comp: String,
  },
  setup(props) {
    return {
      removeComp: () => {
        sceneStore().delComponent(props.comp);
      },
      componentStore: componentStore,
      c: props.comp,
    };
  },
  components: { EnableSwitch },
};
</script>
