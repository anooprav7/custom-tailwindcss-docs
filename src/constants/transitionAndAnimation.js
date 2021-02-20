import plugintransitionProperty from "tailwindcss/lib/plugins/transitionProperty";
import plugintransitionDuration from "tailwindcss/lib/plugins/transitionDuration";
import plugintransitionDelay from "tailwindcss/lib/plugins/transitionDelay";
import plugintransitionTimingFunction from "tailwindcss/lib/plugins/transitionTimingFunction";

export const KEY_TRANSITIONS_AND_ANIMATION = "transitionsAndAnimation";
export const transitionsAndAnimation = {
  title: "Transitions And Animation",
  description: "Effects Desc",
  byPlugin: {
    transitionProperty: {
      title: "Transition Property",
      description: "transitionProperty desc",
      plugin: plugintransitionProperty
    },
    transitionDuration: {
      title: "transitionDuration",
      description: "transitionDuration desc",
      plugin: plugintransitionDuration
    },
    transitionDelay: {
      title: "transitionDelay",
      description: "transitionDelay desc",
      plugin: plugintransitionDelay
    },
    transitionTimingFunction: {
      title: "transitionTimingFunction",
      description: "transitionTimingFunction desc",
      plugin: plugintransitionTimingFunction
    },
  },
  allPlugins: [
    "transitionProperty",
    "transitionDuration",
    "transitionDelay",
    "transitionTimingFunction"
  ]
};
