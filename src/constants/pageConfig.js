import { spacing, KEY_SPACING } from "./spacing";
import { flexbox, KEY_FLEXBOX } from "./flexbox";
import { typography, KEY_TYPOGRAPHY } from "./typography";
import { layout, KEY_LAYOUT } from "./layout";
import { backgrounds, KEY_BACKGROUNDS } from "./backgrounds";
import { grid, KEY_GRID } from "./grid";
import { boxAlignment, KEY_BOX_ALIGNMENT } from "./boxAlignment";
import { sizing, KEY_SIZING } from "./sizing";
import { borders, KEY_BORDERS } from "./borders";
import { effects, KEY_EFFECTS } from "./effects";
import { tables, KEY_TABLES } from "./tables";
import { transitionsAndAnimation, KEY_TRANSITIONS_AND_ANIMATION } from "./transitionAndAnimation";
import { transforms, KEY_TRANSFORMS } from "./transforms";
import { interactivity, KEY_INTERACTIVITY } from "./interactivity";
import { svg, KEY_SVG } from "./svg";
import { accessibility, KEY_ACCESSIBILITY } from "./accessibility";

export const pluginCategoryPages = {
  byCategory: {
    spacing,
    flexbox,
    typography,
    layout,
    backgrounds,
    grid,
    boxAlignment,
    sizing,
    borders,
    effects,
    tables,
    transitionsAndAnimation,
    transforms,
    interactivity,
    svg,
    accessibility
  },
  allCategories: [
    KEY_SPACING,
    KEY_FLEXBOX,
    KEY_TYPOGRAPHY,
    KEY_LAYOUT,
    KEY_BACKGROUNDS,
    KEY_GRID,
    KEY_BOX_ALIGNMENT,
    KEY_SIZING,
    KEY_BORDERS,
    KEY_EFFECTS,
    KEY_TABLES,
    KEY_TRANSITIONS_AND_ANIMATION,
    KEY_TRANSFORMS,
    KEY_INTERACTIVITY,
    KEY_SVG,
    KEY_ACCESSIBILITY
  ]
};

export const pageConfig = {
  pluginCategoryPages
};

let count = 0;
const plugins = [];

pluginCategoryPages.allCategories.forEach(categoryKey => {
  const {allPlugins} = pluginCategoryPages.byCategory[categoryKey]
  count += allPlugins.length;
  plugins.push(...allPlugins)
})

console.log({
  count,
  plugins
})

/*
transition and animation
transforms
interactivity 
svg 
accessibility
*/