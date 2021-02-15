import {spacing, KEY_SPACING} from './spacing'
import {flexbox, KEY_FLEXBOX} from './flexbox'
import {typography, KEY_TYPOGRAPHY} from './typography'
import {layout, KEY_LAYOUT} from './layout'

export const pluginCategoryPages = {
  byCategory: {
    spacing,
    flexbox,
    typography,
    layout
  },
  allCategories: [KEY_SPACING, KEY_FLEXBOX, KEY_TYPOGRAPHY, KEY_LAYOUT]
};

export const pageConfig = {
  pluginCategoryPages
};
