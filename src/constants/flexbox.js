import pluginFlexDirection from 'tailwindcss/lib/plugins/flexDirection'
import pluginFlexGrow from 'tailwindcss/lib/plugins/flexGrow'
import pluginFlexShrink from 'tailwindcss/lib/plugins/flexShrink'
import pluginFlexWrap from 'tailwindcss/lib/plugins/flexWrap'
import pluginFlex from 'tailwindcss/lib/plugins/flex'

export const KEY_FLEXBOX = 'flexbox'
export const flexbox = {
    title: "Flexbox",
    description: "Flexbox Desc",
    byPlugin: {
      flexDirection: {
        title: "flexDirection",
        description: "flexDirection desc",
        plugin: pluginFlexDirection
      },
      flexGrow: {
        title: "flexGrow",
        description: "flexGrow desc",
        plugin: pluginFlexGrow
      },
      flexShrink: {
        title: "flexShrink",
        description: "flexShrink desc",
        plugin: pluginFlexShrink
      },
      flexWrap: {
        title: "flexWrap",
        description: "flexWrap desc",
        plugin: pluginFlexWrap
      },
      flex: {
        title: "flex",
        description: "flex desc",
        plugin: pluginFlex
      },
    },
    allPlugins: ["flexDirection", "flexGrow", "flexShrink", "flexWrap", "flex"]
}

