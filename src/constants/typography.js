import pluginFontFamily from "tailwindcss/lib/plugins/fontFamily";
import pluginFontSize from "tailwindcss/lib/plugins/fontSize";
import pluginFontSmoothing from "tailwindcss/lib/plugins/fontSmoothing";
import pluginFontStyle from "tailwindcss/lib/plugins/fontStyle";
import pluginFontWeight from "tailwindcss/lib/plugins/fontWeight";

import pluginletterSpacing from "tailwindcss/lib/plugins/letterSpacing";
import pluginlineHeight from "tailwindcss/lib/plugins/lineHeight";
import pluginlistStyleType from "tailwindcss/lib/plugins/listStyleType";
import pluginlistStylePosition from "tailwindcss/lib/plugins/listStylePosition";
import pluginplaceholderColor from "tailwindcss/lib/plugins/placeholderColor";
import pluginplaceholderOpacity from "tailwindcss/lib/plugins/placeholderOpacity";

import plugintextAlign from "tailwindcss/lib/plugins/textAlign";
import plugintextColor from "tailwindcss/lib/plugins/textColor";
import plugintextOpacity from "tailwindcss/lib/plugins/textOpacity";
import plugintextDecoration from "tailwindcss/lib/plugins/textDecoration";
import plugintextTransform from "tailwindcss/lib/plugins/textTransform";
import plugintextOverflow from "tailwindcss/lib/plugins/textOverflow";
import pluginverticalAlign from "tailwindcss/lib/plugins/verticalAlign";
import pluginwhitespace from "tailwindcss/lib/plugins/whitespace";
import pluginwordBreak from "tailwindcss/lib/plugins/wordBreak";

function pluginFontVariantNumberic() {
  return function ({ addUtilities }) {
    addUtilities({
      ".normal-nums": { fontVariantNumeric: "normal" },
      ".ordinal": { fontVariantNumeric: "ordinal" },
      ".slashed-zero": { fontVariantNumeric: "slashed-zero" },
      ".lining-nums": { fontVariantNumeric: "lining-nums" },
      ".oldstyle-nums": { fontVariantNumeric: "oldstyle-nums" },
      ".proportional-nums": { fontVariantNumeric: "proportional-nums" },
      ".tabular-nums": { fontVariantNumeric: "tabular-nums" },
      ".diagonal-fractions": { fontVariantNumeric: "diagonal-fractions" },
      ".stacked-fractions": { fontVariantNumeric: "stacked-fractions" }
    });
  };
}

export const KEY_TYPOGRAPHY = "typography";
export const typography = {
  title: "Typography",
  description: "Typography Desc",
  byPlugin: {
    fontFamily: {
      title: "Font Family ",
      description: "fontFamily desc",
      plugin: pluginFontFamily
    },
    fontVariantNumeric: {
      title: "Font Variant Numeric ",
      description: "fontVariantNumeric desc",
      plugin: pluginFontVariantNumberic
    },
    fontSize: {
      title: "Font Size ",
      description: "fontSize desc",
      plugin: pluginFontSize
    },
    fontSmoothing: {
      title: "Font Smoothing ",
      description: "FontSmoothing desc",
      plugin: pluginFontSmoothing
    },
    fontStyle: {
      title: "Font Style ",
      description: "FontStyle desc",
      plugin: pluginFontStyle
    },
    fontWeight: {
      title: "Font Weight ",
      description: "FontWeight desc",
      plugin: pluginFontWeight
    },
    letterSpacing: {
      title: "Letter Spacing ",
      description: "letterSpacing desc",
      plugin: pluginletterSpacing
    },
    lineHeight: {
      title: "Line Height ",
      description: "lineHeight desc",
      plugin: pluginlineHeight
    },
    letterSpacing: {
      title: "Letter Spacing ",
      description: "letterSpacing desc",
      plugin: pluginletterSpacing
    },
    listStyleType: {
      title: "List StyleType ",
      description: "listStyleType desc",
      plugin: pluginlistStyleType
    },
    listStylePosition: {
      title: "List Style Position ",
      description: "listStylePosition desc",
      plugin: pluginlistStylePosition
    },
    placeholderColor: {
      title: "Placeholder Color ",
      description: "placeholderColor desc",
      plugin: pluginplaceholderColor,
      customProps: {
        transformSelector: (selector) => ( 
          selector.split('::')[0].trim().replace(/^\./, '').replace(/\\/g, '')
        ),
        preview: (css, { className }) => (
          <td
            className={`text-center font-medium text-base whitespace-nowrap align-middle ${className}`}
            style={css}
          >
            <div className="w-16 mx-auto">Aa</div>
          </td>
        ),
      }
    },
    placeholderOpacity: {
      title: "Placeholder Opacity ",
      description: "placeholderOpacity desc",
      plugin: pluginplaceholderOpacity,
      customProps: {
        transformSelector: (selector) => selector.split('::')[0].replace(/^\./, '').replace(/\\/g, ''),
      }
    },
    textAlign: {
      title: "Text Align",
      description: "textAlign desc",
      plugin: plugintextAlign
    },
    textColor: {
      title: "Text Color",
      description: "textColor desc",
      plugin: plugintextColor
    },
    textOpacity: {
      title: "Text Opacity",
      description: "textOpacity desc",
      plugin: plugintextOpacity
    },
    textDecoration: {
      title: "Text Decoration",
      description: "textDecoration desc",
      plugin: plugintextDecoration
    },
    textTransform: {
      title: "Text Transform",
      description: "textTransform desc",
      plugin: plugintextTransform
    },
    textOverflow: {
      title: "Text Overflow",
      description: "textOverflow desc",
      plugin: plugintextOverflow
    },
    textTransform: {
      title: "Text Transform",
      description: "textTransform desc",
      plugin: plugintextTransform
    },
    verticalAlign: {
      title: "Vertical Align",
      description: "verticalAlign desc",
      plugin: pluginverticalAlign
    },
    whitespace: {
      title: "Whitespace",
      description: "whitespace desc",
      plugin: pluginwhitespace
    },
    wordBreak: {
      title: "Word Break",
      description: "wordBreak desc",
      plugin: pluginwordBreak
    },
  },
  allPlugins: [
    "fontFamily",
    "fontVariantNumeric",
    "fontSize",
    "fontSmoothing",
    "fontStyle",
    "fontWeight",
    "letterSpacing",
    "lineHeight",
    "listStyleType",
    "listStylePosition",
    "placeholderColor",
    "placeholderOpacity",
    "textAlign",
    "textColor",
    "textOpacity",
    "textDecoration",
    "textTransform",
    "textOverflow",
    "verticalAlign",
    "whitespace",
    "wordBreak"
  ]
};
