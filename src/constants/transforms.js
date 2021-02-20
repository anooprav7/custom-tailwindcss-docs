import plugintransform from "tailwindcss/lib/plugins/transform";
import plugintransformOrigin from "tailwindcss/lib/plugins/transformOrigin";
import pluginscale from "tailwindcss/lib/plugins/scale";
import pluginrotate from "tailwindcss/lib/plugins/rotate";
import plugintranslate from "tailwindcss/lib/plugins/translate";
import pluginskew from "tailwindcss/lib/plugins/skew";

export const KEY_TRANSFORMS = "transforms";
export const transforms = {
  title: "Effects",
  description: "Effects Desc",
  byPlugin: {
    transform: {
      title: "transform",
      description: "boxShadow desc",
      plugin: plugintransform
    },
    transformOrigin: {
      title: "transformOrigin",
      description: "boxShadow desc",
      plugin: plugintransformOrigin
    },
    scale: {
      title: "scale",
      description: "boxShadow desc",
      plugin: pluginscale
    },
    rotate: {
      title: "rotate",
      description: "boxShadow desc",
      plugin: pluginrotate
    },
    translate: {
      title: "translate",
      description: "boxShadow desc",
      plugin: plugintranslate
    },
    skew: {
      title: "skew",
      description: "boxShadow desc",
      plugin: pluginskew
    },
  },
  allPlugins: [
    "transform",
    "transformOrigin",
    "scale",
    "rotate",
    "translate",
    "skew"
  ]
};
