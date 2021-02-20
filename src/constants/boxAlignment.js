import pluginjustifyContent from "tailwindcss/lib/plugins/justifyContent";

import pluginjustifyItems from "tailwindcss/lib/plugins/justifyItems";
import pluginjustifySelf from "tailwindcss/lib/plugins/justifySelf";
import pluginalignContent from "tailwindcss/lib/plugins/alignContent";
import pluginalignItems from "tailwindcss/lib/plugins/alignItems";
import pluginalignSelf from "tailwindcss/lib/plugins/alignSelf";
import pluginplaceContent from "tailwindcss/lib/plugins/placeContent";
import pluginplaceItems from "tailwindcss/lib/plugins/placeItems";
import pluginplaceSelf from "tailwindcss/lib/plugins/placeSelf";

export const KEY_BOX_ALIGNMENT = "boxAlignment";
export const boxAlignment = {
  title: "Box Alignment",
  description: "Box Alignment Desc",
  byPlugin: {
    justifyContent: {
      title: "Justify Content",
      description: "justifyContent desc",
      plugin: pluginjustifyContent
    },
    justifyItems: {
      title: "Justify Items",
      description: "justifyContent desc",
      plugin: pluginjustifyItems
    },
    justifySelf: {
      title: "Justify Self",
      description: "justifyContent desc",
      plugin: pluginjustifySelf
    },
    alignContent: {
      title: "Align Content",
      description: "justifyContent desc",
      plugin: pluginalignContent
    },
    alignItems: {
      title: "Align Items",
      description: "justifyContent desc",
      plugin: pluginalignItems
    },
    alignSelf: {
      title: "Align Self",
      description: "justifyContent desc",
      plugin: pluginalignSelf
    },
    placeContent: {
      title: "Place Content",
      description: "justifyContent desc",
      plugin: pluginplaceContent
    },
    placeItems: {
      title: "Place Items",
      description: "justifyContent desc",
      plugin: pluginplaceItems
    },
    placeSelf: {
      title: "Place Self",
      description: "justifyContent desc",
      plugin: pluginplaceSelf
    },
  },
  allPlugins: [
    "justifyContent",
    "justifyItems",
    "justifySelf",
    "alignContent",
    "alignItems",
    "alignSelf",
    "placeContent",
    "placeItems",
    "placeSelf"
  ]
};
