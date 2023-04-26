import { defineStore } from "pinia";

export const componentStore = defineStore("component", {
  state: () => ({
    components: {},
  }),
  actions: {
    registerComponents(c) {
      this.components = c;
    },
    getDefaultAttr(comp, attr) {
      return this.components[comp]?.data[attr]?.default ?? null;
    },
    getAttrDescr(comp, attr) {
      return this.components[comp]?.data[attr]?.descr ?? attr;
    },
    getComponentDefaultAttr(comp, attr) {
      return this.components[comp]?.data[attr]?.default ?? null;
    },
    getComponentDefaultAttrs(comp) {
      let ret = {};
      Object.keys(this.components[comp]?.data).forEach((attr) => {
        ret[attr] = this.getComponentDefaultAttr(comp, attr);
      });
      return ret;
    },
    getComponentList() {
      return Object.keys(this.components);
    },
    getTitle(comp) {
      return this.components[comp]?.title ?? comp;
    },
    getSubtitle(comp) {
      return this.components[comp]?.descr ?? null;
    },
  },
});
