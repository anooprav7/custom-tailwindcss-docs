import { spacing, KEY_SPACING } from "./spacing";
import { flexbox, KEY_FLEXBOX } from "./flexbox";
import { typography, KEY_TYPOGRAPHY } from "./typography";
import { layout, KEY_LAYOUT } from "./layout";
import { backgrounds, KEY_BACKGROUNDS } from "./backgrounds";
import { grid, KEY_GRID } from "./grid";
import { boxAlignment, KEY_BOX_ALIGNMENT } from "./boxAlignment";
import { sizing, KEY_SIZING } from "./sizing";

export const pluginCategoryPages = {
  byCategory: {
    spacing,
    flexbox,
    typography,
    layout,
    backgrounds,
    grid,
    boxAlignment,
    sizing
  },
  allCategories: [
    KEY_SPACING,
    KEY_FLEXBOX,
    KEY_TYPOGRAPHY,
    KEY_LAYOUT,
    KEY_BACKGROUNDS,
    KEY_GRID,
    KEY_BOX_ALIGNMENT,
    KEY_SIZING
  ]
};

export const pageConfig = {
  pluginCategoryPages
};
