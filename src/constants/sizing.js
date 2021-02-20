import pluginwidth from "tailwindcss/lib/plugins/width";
import pluginminWidth from "tailwindcss/lib/plugins/minWidth";
import pluginmaxWidth from "tailwindcss/lib/plugins/maxWidth";
import pluginheight from "tailwindcss/lib/plugins/height";
import pluginmaxHeight from "tailwindcss/lib/plugins/maxHeight";
import pluginminHeight from "tailwindcss/lib/plugins/minHeight";

export const KEY_SIZING = "sizing";
export const sizing = {
  title: "Sizing",
  description: "Spacing Desc",
  byPlugin: {
    width: {
      title: "Width",
      description: "Margin desc",
      plugin: pluginwidth
    },
    minWidth: {
      title: "minWidth",
      description: "Margin desc",
      plugin: pluginminWidth
    },
    maxWidth: {
      title: "maxWidth",
      description: "Margin desc",
      plugin: pluginmaxWidth
    },
    height: {
      title: "height",
      description: "Margin desc",
      plugin: pluginheight
    },
    maxHeight: {
      title: "maxHeight",
      description: "Margin desc",
      plugin: pluginmaxHeight
    },
    minHeight: {
      title: "minHeight",
      description: "Margin desc",
      plugin: pluginminHeight
    },
  },
  allPlugins: [
    "width",
    "minWidth",
    "maxWidth",
    "height",
    "maxHeight",
    "minHeight"
  ]
};
