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
      title: "Box Sizing",
      description: "boxSizing desc",
      plugin: pluginboxSizing
    },
    display: {
      title: "Display",
      description: "display desc",
      plugin: plugindisplay
    },
    float: {
      title: "Float",
      description: "float desc",
      plugin: pluginfloat
    },
    clear: {
      title: "Clear",
      description: "clear desc",
      plugin: pluginclear
    },
    objectFit: {
      title: "Object Fit",
      description: "objectFit desc",
      plugin: pluginobjectFit
    },
    objectPosition: {
      title: "Object Position",
      description: "objectPosition desc",
      plugin: pluginobjectPosition
    },
    overflow: {
      title: "Overflow",
      description: "overflow desc",
      plugin: pluginoverflow
    },
    overscrollBehavior: {
      title: "Overscroll Behavior",
      description: "overscrollBehavior desc",
      plugin: pluginoverscrollBehavior
    },
    position: {
      title: "Position",
      description: "position desc",
      plugin: pluginposition
    },
    inset: {
      title: "Top/Right/Bottom/Left",
      description: "inset desc",
      plugin: plugininset
    },
    visibility: {
      title: "Visibility",
      description: "visibility desc",
      plugin: pluginvisibility
    },
    zIndex: {
      title: "Z Index",
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
