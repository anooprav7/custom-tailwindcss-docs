import pluginFlexDirection from "tailwindcss/lib/plugins/flexDirection";
import pluginFlexGrow from "tailwindcss/lib/plugins/flexGrow";
import pluginFlexShrink from "tailwindcss/lib/plugins/flexShrink";
import pluginFlexWrap from "tailwindcss/lib/plugins/flexWrap";
import pluginFlex from "tailwindcss/lib/plugins/flex";
import pluginOrder from "tailwindcss/lib/plugins/order";

export const KEY_FLEXBOX = "flexbox";
export const flexbox = {
  title: "Flexbox",
  description: "Flexbox Desc",
  byPlugin: {
    flexDirection: {
      title: "Flex Direction",
      description: "flexDirection desc",
      plugin: pluginFlexDirection
    },
    flexGrow: {
      title: "Flex Grow",
      description: "flexGrow desc",
      plugin: pluginFlexGrow
    },
    flexShrink: {
      title: "FlexShrink",
      description: "flexShrink desc",
      plugin: pluginFlexShrink
    },
    flexWrap: {
      title: "FlexWrap",
      description: "flexWrap desc",
      plugin: pluginFlexWrap
    },
    flex: {
      title: "Flex",
      description: "flex desc",
      plugin: pluginFlex
    },
    order: {
      title: "Order",
      description: "order desc",
      plugin: pluginOrder
    }
  },
  allPlugins: [
    "flexDirection",
    "flexGrow",
    "flexShrink",
    "flexWrap",
    "flex",
    "order"
  ]
};
