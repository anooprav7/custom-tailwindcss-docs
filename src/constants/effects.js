import pluginboxShadow from 'tailwindcss/lib/plugins/boxShadow'
import pluginopacity from 'tailwindcss/lib/plugins/opacity'

export const KEY_EFFECTS = "effects";
export const effects = {
  title: "Effects",
  description: "Effects Desc",
  byPlugin: {
    boxShadow: {
      title: "Box Shadow",
      description: "boxShadow desc",
      plugin: pluginboxShadow
    },
    opacity: {
      title: "Opacity",
      description: "Opacity desc",
      plugin: pluginopacity
    },
  },
  allPlugins: [
    "boxShadow",
    "opacity",
  ]
};
