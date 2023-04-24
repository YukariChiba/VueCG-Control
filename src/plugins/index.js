/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";
import VueResizeText from "vue3-resize-text";
import SSE from "./sse";
import animexyz from "./animxyz";
export function registerPlugins(app) {
  loadFonts();
  app
    .use(vuetify)
    .use(pinia)
    .use(router)
    .use(VueResizeText)
    .use(SSE)
    .use(animexyz);
}
