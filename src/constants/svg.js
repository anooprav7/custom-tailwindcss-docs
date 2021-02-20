import pluginfill from "tailwindcss/lib/plugins/fill";
import pluginstroke from "tailwindcss/lib/plugins/stroke";
import pluginstrokeWidth from "tailwindcss/lib/plugins/strokeWidth";

export const KEY_SVG = "svg";
export const svg = {
  title: "SVG",
  description: "Effects Desc",
  byPlugin: {
    fill: {
      title: "fill",
      description: "fill desc",
      plugin: pluginfill
    },
    stroke: {
      title: "stroke",
      description: "stroke desc",
      plugin: pluginstroke
    },
    strokeWidth: {
      title: "strokeWidth",
      description: "strokeWidth desc",
      plugin: pluginstrokeWidth
    },
  },
  allPlugins: ["fill", "stroke", "strokeWidth"]
};
