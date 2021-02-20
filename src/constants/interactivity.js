import pluginappearance from "tailwindcss/lib/plugins/appearance";
import plugincursor from "tailwindcss/lib/plugins/cursor";
import pluginoutline from "tailwindcss/lib/plugins/outline";
import pluginpointerEvents from "tailwindcss/lib/plugins/pointerEvents";
import pluginresize from "tailwindcss/lib/plugins/resize";
import pluginuserSelect from "tailwindcss/lib/plugins/userSelect";

export const KEY_INTERACTIVITY = "interactivity";
export const interactivity = {
  title: "Interactivity",
  description: "Effects Desc",
  byPlugin: {
    appearance: {
      title: "appearance",
      description: "appearance desc",
      plugin: pluginappearance
    },
    cursor: {
      title: "cursor",
      description: "cursor desc",
      plugin: plugincursor
    },
    outline: {
      title: "outline",
      description: "outline desc",
      plugin: pluginoutline
    },
    pointerEvents: {
      title: "pointerEvents",
      description: "pointerEvents desc",
      plugin: pluginpointerEvents
    },
    resize: {
      title: "resize",
      description: "resize desc",
      plugin: pluginresize
    },
    userSelect: {
      title: "userSelect",
      description: "userSelect desc",
      plugin: pluginuserSelect
    },
  },
  allPlugins: [
    "appearance",
    "cursor",
    "outline",
    "pointerEvents",
    "resize",
    "userSelect"
  ]
};
