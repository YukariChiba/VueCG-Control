import { defineAsyncComponent } from "vue";

const componentList = {
  "corner-logo": () => import("./CornerLogo"),
  "bottom-bar": () => import("./BottomBar"),
  "program-topic": () => import("./ProgramTopic"),
  "video-tag": () => import("./VideoTag"),
  "program-title": () => import("./ProgramTitle"),
  "test-module": () => import("./TestModule"),
};

export default (app) => {
  for (const c in componentList)
    app.component("tv-" + c, defineAsyncComponent(componentList[c]));
};
