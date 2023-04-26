import { defineStore } from "pinia";
import { componentStore } from "../component";
import { apiDelAttrs, apiSetAttr } from "@/utils/Control/api";

export const sceneStore = defineStore("scene", {
  state: () => ({
    scene: null,
    components: [],
    //fetched: false,
    attrs: {},
  }),
  actions: {
    getAttr(comp, attr) {
      if (comp in this.attrs)
        if (attr in this.attrs[comp]) return this.attrs[comp][attr];
      const def = componentStore().getDefaultAttr(comp, attr);
      this.setAttr(comp, attr, def, false);
      return componentStore().getComponentDefaultAttrs(comp, attr);
    },
    setAttr(comp, attr, value, sync = true) {
      if (!(comp in this.attrs)) this.attrs[comp] = {};
      this.attrs[comp][attr] = value;
      //if (this.fetched)
      if (sync) apiSetAttr(this.scene, comp, attr, value);
    },
    applyAttrs(attrs, sync = true) {
      Object.keys(attrs).forEach((comp) => {
        this.addComponent(comp);
        Object.keys(attrs[comp]).forEach((attr) => {
          this.setAttr(comp, attr, attrs[comp][attr], sync);
        });
      });
      //this.fetched = true;
    },
    addComponent(comp) {
      if (!this.components.includes(comp)) {
        this.components.push(comp);
        this.setAttr(
          comp,
          "enabled",
          componentStore().getComponentDefaultAttr(comp, "enabled")
        );
      }
    },
    resetComponent(comp) {
      let def = {};
      def[comp] = componentStore().getComponentDefaultAttrs(comp);
      this.applyAttrs(def);
    },
    delComponent(comp) {
      this.resetComponent(comp);
      this.$patch({
        components: this.components.filter((c) => c !== comp),
      });
      delete this.attrs[comp];
      apiDelAttrs(this.scene, comp);
    },
  },
});
