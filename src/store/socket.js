import { defineStore } from "pinia";
import { stateStore } from "./state";

export const socketStore = defineStore("socket", {
  state: () => ({
    client: null,
  }),
  actions: {
    onMessage(msg) {
      if (!msg.type) return;
      console.log(`Received ${msg.type} message!`);
      switch (msg.type) {
        case "test": {
          break;
        }
        case "set": {
          stateStore().updateAttr(msg);
          break;
        }
        case "apply": {
          stateStore().applyAttrs(msg.attrs);
          break;
        }
      }
    },
    closeSSE() {
      if (this.client) this.client.disconnect();
    },
    initSSE(app) {
      if (!stateStore().scene) return;
      this.client = app.$sse.create({
        format: "json",
        url: "http://127.0.0.1:8080/display/sse/" + stateStore().scene,
      });
      this.client
        .connect()
        .then(() => {
          console.log("SSE connected!");
        })
        .catch((err) => {
          console.error("SSE connection failed.", err);
        });

      this.client.on("message", this.onMessage);
    },
  },
});
