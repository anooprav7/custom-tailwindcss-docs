import pluginMargin from "tailwindcss/lib/plugins/margin";
import pluginPadding from "tailwindcss/lib/plugins/padding";
import pluginSpaceBetween from "tailwindcss/lib/plugins/space";

export const KEY_SPACING = 'spacing'
export const spacing = {
    title: "Spacing",
    description: "Spacing Desc",
    byPlugin: {
      margin: {
        title: "Margin",
        description: "Margin desc",
        plugin: pluginMargin
      },
      padding: {
        title: "Padding",
        description: "Padding desc",
        plugin: pluginPadding
      },
      space: {
        title: "Space Between",
        description: "Space Between desc",
        plugin: pluginSpaceBetween
      }
    },
    allPlugins: ["margin", "padding", "space"]
}

