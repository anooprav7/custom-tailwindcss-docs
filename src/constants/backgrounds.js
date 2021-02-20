import pluginbackgroundAttachment from "tailwindcss/lib/plugins/backgroundAttachment";
import pluginbackgroundClip from "tailwindcss/lib/plugins/backgroundClip";
import pluginbackgroundColor from "tailwindcss/lib/plugins/backgroundColor";
import pluginbackgroundPosition from "tailwindcss/lib/plugins/backgroundPosition";
import pluginbackgroundRepeat from "tailwindcss/lib/plugins/backgroundRepeat";
import pluginbackgroundSize from "tailwindcss/lib/plugins/backgroundSize";
import pluginbackgroundImage from "tailwindcss/lib/plugins/backgroundImage";
import pluginbackgroundOpacity from "tailwindcss/lib/plugins/backgroundOpacity";
import plugingradientColorStops from "tailwindcss/lib/plugins/gradientColorStops";

export const KEY_BACKGROUNDS = "backgrounds";
export const backgrounds = {
  title: "Backgrounds",
  description: "backgrounds Desc",
  byPlugin: {
    backgroundAttachment: {
      title: "Background Attachment",
      description: "backgroundAttachment desc",
      plugin: pluginbackgroundAttachment
    },
    backgroundClip: {
      title: "Background Attachment",
      description: "backgroundAttachment desc",
      plugin: pluginbackgroundClip
    },
    backgroundColor: {
      title: "Background Attachment",
      description: "backgroundAttachment desc",
      plugin: pluginbackgroundColor
    },
    backgroundPosition: {
      title: "Background Position",
      description: "backgroundPosition desc",
      plugin: pluginbackgroundPosition
    },
    backgroundRepeat: {
      title: "Background Repeat",
      description: "backgroundRepeat desc",
      plugin: pluginbackgroundRepeat
    },
    backgroundSize: {
      title: "Background Size",
      description: "backgroundSize desc",
      plugin: pluginbackgroundSize
    },
    backgroundImage: {
      title: "Background Image",
      description: "backgroundImage desc",
      plugin: pluginbackgroundImage
    },
    backgroundOpacity: {
      title: "Background Opacity",
      description: "backgroundOpacity desc",
      plugin: pluginbackgroundOpacity
    },
    gradientColorStops: {
      title: "Gradient Color Stops",
      description: "backgroundAttachment desc",
      plugin: plugingradientColorStops
    },
  },
  allPlugins: [
    "backgroundAttachment",
    "backgroundClip",
    "backgroundColor",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundSize",
    "backgroundImage",
    "backgroundOpacity",
    "gradientColorStops"
  ]
};
