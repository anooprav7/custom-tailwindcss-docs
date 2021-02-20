import pluginborderRadius from "tailwindcss/lib/plugins/borderRadius";
import pluginborderWidth from "tailwindcss/lib/plugins/borderWidth";
import pluginborderColor from "tailwindcss/lib/plugins/borderColor";
import pluginborderOpacity from "tailwindcss/lib/plugins/borderOpacity";
import pluginborderStyle from "tailwindcss/lib/plugins/borderStyle";
import plugindivideColor from "tailwindcss/lib/plugins/divideColor";
import plugindivideOpacity from "tailwindcss/lib/plugins/divideOpacity";
import plugindivideStyle from "tailwindcss/lib/plugins/divideStyle";
import plugindivideWidth from "tailwindcss/lib/plugins/divideWidth";
import pluginringColor from "tailwindcss/lib/plugins/ringColor";
import pluginringOffsetColor from "tailwindcss/lib/plugins/ringOffsetColor";
import pluginringOffsetWidth from "tailwindcss/lib/plugins/ringOffsetWidth";
import pluginringOpacity from "tailwindcss/lib/plugins/ringOpacity";
import pluginringWidth from "tailwindcss/lib/plugins/ringWidth";

export const KEY_BORDERS = "borders";
export const borders = {
  title: "Borders",
  description: "Borders Desc",
  byPlugin: {
    borderRadius: {
      title: "Border Radius",
      description: "flexDirection desc",
      plugin: pluginborderRadius
    },
    borderWidth: {
      title: "Border Width",
      description: "borderWidth desc",
      plugin: pluginborderWidth
    },
    borderColor: {
      title: "Border Color",
      description: "borderColor desc",
      plugin: pluginborderColor
    },
    borderOpacity: {
      title: "Border Opacity",
      description: "borderOpacity desc",
      plugin: pluginborderOpacity
    },
    borderStyle: {
      title: "Border Style",
      description: "borderStyle desc",
      plugin: pluginborderStyle
    },
    divideColor: {
      title: "Divide Color",
      description: "divideColor desc",
      plugin: plugindivideColor
    },
    divideOpacity: {
      title: "Divide Opacity",
      description: "divideOpacity desc",
      plugin: plugindivideOpacity
    },
    divideStyle: {
      title: "Divide Style",
      description: "divideStyle desc",
      plugin: plugindivideStyle
    },
    divideWidth: {
      title: "Divide Width",
      description: "divideWidth desc",
      plugin: plugindivideWidth
    },
    ringColor: {
      title: "Ring Color",
      description: "ringColor desc",
      plugin: pluginringColor
    },
    ringOffsetColor: {
      title: "Ring Offset Color",
      description: "ringOffsetColor desc",
      plugin: pluginringOffsetColor
    },
    ringOffsetWidth: {
      title: "Ring Offset Width",
      description: "ringOffsetWidth desc",
      plugin: pluginringOffsetWidth
    },
    ringOpacity: {
      title: "Ring Opacity",
      description: "ringOpacity desc",
      plugin: pluginringOpacity
    },
    ringWidth: {
      title: "Ring Width",
      description: "ringWidth desc",
      plugin: pluginringWidth
    },
  },
  allPlugins: [
    "borderRadius",
    "borderWidth",
    "borderColor",
    "borderOpacity",
    "borderStyle",
    "divideColor",
    "divideOpacity",
    "divideStyle",
    "divideWidth",
    "ringColor",
    "ringOffsetColor",
    "ringOffsetWidth",
    "ringOpacity",
    "ringWidth"
  ]
};
