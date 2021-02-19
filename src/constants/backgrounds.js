import pluginMargin from "tailwindcss/lib/plugins/margin";
import pluginPadding from "tailwindcss/lib/plugins/padding";
import pluginSpaceBetween from "tailwindcss/lib/plugins/space";

export const KEY_BACKGROUNDS = 'backgrounds'
export const backgrounds = {
    title: "Backgrounds",
    description: "backgrounds Desc",
    byPlugin: {
      margin: {
        title: "Margin",
        description: "Margin desc",
        plugin: pluginMargin
      },
    },
    allPlugins: ["margin", "padding", "space"]
}

