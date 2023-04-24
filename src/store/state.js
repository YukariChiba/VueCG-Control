import { defineStore } from "pinia";

export const stateStore = defineStore("state", {
  state: () => ({
    scene: null,
    attr: {},
  }),
  actions: {
    resetScene() {
      this.attr = {};
    },
    updateAttr(msg) {
      this.attr[msg.attr] = msg.value;
    },
    applyAttrs(attrs) {
      Object.keys(attrs).forEach((k) => {
        this.attr[k] = attrs[k];
      });
    },
    getEnabled(attr, def) {
      if (this.attr[attr]) return this.attr[attr] === "true";
      else this.attr[attr] = def ? "true" : "false";
      return def;
    },
    getAttr(attr, def = null) {
      if (this.attr[attr]) return this.attr[attr];
      else this.attr[attr] = def;
      return def;
    },
  },
});
