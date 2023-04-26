import { defineStore } from "pinia";
import { componentStore } from "../component";

export const stateStore = defineStore("state", {
  state: () => ({
    scene: null,
    attrs: {},
  }),
  actions: {
    resetScene() {
      this.attrs = {};
    },
    updateAttr(comp, attr, value) {
      if (!this.attrs[comp]) this.attrs[comp] = {};
      this.attrs[comp][attr] = value;
    },
    applyAttrs(attrs) {
      Object.keys(attrs).forEach((comp) => {
        Object.keys(attrs[comp]).forEach((attr) => {
          this.updateAttr(comp, attr, attrs[comp][attr]);
        });
      });
    },
    getAttr(comp, attr) {
      if (comp in this.attrs)
        if (attr in this.attrs[comp]) return this.attrs[comp][attr];

      const def = componentStore().getDefaultAttr(comp, attr);
      this.updateAttr(comp, attr, def);
      return def;
    },
  },
});
