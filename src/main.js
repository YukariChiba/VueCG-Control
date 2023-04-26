import App from "./App.vue";

import { createApp } from "vue";
import { registerPlugins } from "@/plugins";

import footageComponents from "@/components/footage";

import { componentStore } from "./store/component";

const app = createApp(App);

registerPlugins(app);

componentStore().registerComponents(footageComponents(app));

app.mount("#app");
