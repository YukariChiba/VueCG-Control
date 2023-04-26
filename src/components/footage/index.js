import { defineAsyncComponent } from "vue";

const components = [
  "corner-logo",
  "bottom-bar",
  "program-topic",
  "video-tag",
  "program-title",
  "test-module",
];
let componentList = {};
let attrList = {};
components.forEach((c) => {
  componentList[c] = () => import("./" + c);
  try {
    import("./attrs/" + c + ".json").then((j) => {
      attrList[c] = j.default;
    });
  } catch (e) {
    attrList[c] = {};
  }
});

export default (app) => {
  for (const c in componentList) {
    app.component("tv-" + c, defineAsyncComponent(componentList[c]));
  }
  return attrList;
};
