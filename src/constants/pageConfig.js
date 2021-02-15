// import pluginBgPosition from "tailwindcss/lib/plugins/backgroundPosition";
import pluginMargin from "tailwindcss/lib/plugins/margin";
import pluginPadding from "tailwindcss/lib/plugins/padding";
import pluginSpaceBetween from "tailwindcss/lib/plugins/space";

import { CATEGORY_KEY_MAP } from "./constantMaps";
import {spacing, KEY_SPACING} from './spacing'
import {flexbox, KEY_FLEXBOX} from './flexbox'
import {typography, KEY_TYPOGRAPHY} from './typography'

export const pluginCategoryPages = {
  byCategory: {
    spacing,
    flexbox,
    typography
  },
  allCategories: [KEY_SPACING, KEY_FLEXBOX, KEY_TYPOGRAPHY]
};

export const pageConfig = {
  pluginCategoryPages
};

/*
[CATEGORY_KEY_MAP.spacing]: {
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
*/