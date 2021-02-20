import plugin from 'tailwindcss/lib/plugins/accessibility'

export const KEY_ACCESSIBILITY = "accessibility";
export const accessibility = {
  title: "Accessibility",
  description: "Accessibility Desc",
  byPlugin: {
    accessibility: {
      title: "Accessibility",
      description: "accessibility desc",
      plugin
    },
  },
  allPlugins: [
    "accessibility"
  ]
};
