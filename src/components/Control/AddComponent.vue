<template>
  <v-dialog v-model="dialog" width="auto">
    <template v-slot:activator="{ props }">
      <v-card v-bind="props" variant="tonal">
        <v-card-text>
          <v-row justify="center">
            <v-col cols="6">
              <div class="text-center ma-1">
                <v-icon
                  class="mb-4"
                  color="grey"
                  icon="mdi-plus-box"
                  size="64"
                ></v-icon>
                <br />
                <p class="text-grey">Add new component...</p>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </template>

    <v-card title="Add a component">
      <v-card-text>
        <v-select
          v-model:model-value="selected"
          hide-details
          :items="compList()"
          item-title="title"
          item-value="comp"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="dialog = false">Cancel</v-btn>
        <v-btn :disabled="!selected" @click="addComponent" color="success"
          >Add</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";
import { componentStore } from "@/store/component";
import { sceneStore } from "@/store/Control/scene";

let dialog = ref(false);
const compList = () => {
  let comps = [];
  componentStore()
    .getComponentList()
    .forEach((e) => {
      if (!sceneStore().components.includes(e))
        comps.push({
          title: componentStore().getTitle(e),
          comp: e,
        });
    });
  return comps;
};
const selected = ref(null);
const addComponent = () => {
  sceneStore().addComponent(selected.value);
  dialog.value = false;
  selected.value = null;
};
</script>
