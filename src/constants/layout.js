import pluginboxSizing from "tailwindcss/lib/plugins/boxSizing";
import plugindisplay from "tailwindcss/lib/plugins/display";
import pluginfloat from "tailwindcss/lib/plugins/float";
import pluginclear from "tailwindcss/lib/plugins/clear";
import pluginobjectFit from "tailwindcss/lib/plugins/objectFit";
import pluginobjectPosition from "tailwindcss/lib/plugins/objectPosition";
import pluginoverflow from "tailwindcss/lib/plugins/overflow";
import pluginoverscrollBehavior from "tailwindcss/lib/plugins/overscrollBehavior";
import pluginposition from "tailwindcss/lib/plugins/position";
import plugininset from "tailwindcss/lib/plugins/inset";
import pluginvisibility from "tailwindcss/lib/plugins/visibility";
import pluginzIndex from "tailwindcss/lib/plugins/zIndex";

export const KEY_LAYOUT = "layout";
export const layout = {
  title: "Layout",
  description: "Layout Desc",
  byPlugin: {
    boxSizing: {
      title: "boxSizing",
      description: "boxSizing desc",
      plugin: pluginboxSizing
    },
    display: {
      title: "display",
      description: "display desc",
      plugin: plugindisplay
    },
    float: {
      title: "float",
      description: "float desc",
      plugin: pluginfloat
    },
    clear: {
      title: "clear",
      description: "clear desc",
      plugin: pluginclear
    },
    objectFit: {
      title: "objectFit",
      description: "objectFit desc",
      plugin: pluginobjectFit
    },
    objectPosition: {
      title: "objectPosition",
      description: "objectPosition desc",
      plugin: pluginobjectPosition
    },
    overflow: {
      title: "overflow",
      description: "overflow desc",
      plugin: pluginoverflow
    },
    overscrollBehavior: {
      title: "overscrollBehavior",
      description: "overscrollBehavior desc",
      plugin: pluginoverscrollBehavior
    },
    position: {
      title: "position",
      description: "position desc",
      plugin: pluginposition
    },
    inset: {
      title: "inset",
      description: "inset desc",
      plugin: plugininset
    },
    visibility: {
      title: "visibility",
      description: "visibility desc",
      plugin: pluginvisibility
    },
    zIndex: {
      title: "zIndex",
      description: "zIndex desc",
      plugin: pluginzIndex
    }
  },
  allPlugins: [
    "boxSizing",
    "display",
    "float",
    "clear",
    "objectFit",
    "objectPosition",
    "overflow",
    "overscrollBehavior",
    "position",
    "inset",
    "visibility",
    "zIndex"
  ]
};
