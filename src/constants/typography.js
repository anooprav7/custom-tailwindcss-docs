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
      title: "fontFamily ",
      description: "fontFamily desc",
      plugin: pluginFontFamily
    },
    fontVariantNumberic: {
      title: "FontVariantNumberic ",
      description: "FontVariantNumberic desc",
      plugin: pluginFontVariantNumberic
    },
    fontSize: {
      title: "fontSize ",
      description: "fontSize desc",
      plugin: pluginFontSize
    },
    fontSmoothing: {
      title: "FontSmoothing ",
      description: "FontSmoothing desc",
      plugin: pluginFontSmoothing
    },
    fontStyle: {
      title: "FontStyle ",
      description: "FontStyle desc",
      plugin: pluginFontStyle
    },
    fontWeight: {
      title: "FontWeight ",
      description: "FontWeight desc",
      plugin: pluginFontWeight
    },
    letterSpacing: {
      title: "letterSpacing ",
      description: "letterSpacing desc",
      plugin: pluginletterSpacing
    },
    lineHeight: {
      title: "lineHeight ",
      description: "lineHeight desc",
      plugin: pluginlineHeight
    },
    letterSpacing: {
      title: "letterSpacing ",
      description: "letterSpacing desc",
      plugin: pluginletterSpacing
    },
    listStyleType: {
      title: "listStyleType ",
      description: "listStyleType desc",
      plugin: pluginlistStyleType
    },
    listStylePosition: {
      title: "listStylePosition ",
      description: "listStylePosition desc",
      plugin: pluginlistStylePosition
    },
    placeholderColor: {
      title: "placeholderColor ",
      description: "placeholderColor desc",
      plugin: pluginplaceholderColor,
      customProps: {
        transformSelector: (selector) => ( 
          selector.split('::')[0].trim().replace(/^\./, '').replace(/\\/g, '')
          // <>
          //   {selector.split('::')[0].trim().replace(/^\./, '').replace(/\\/g, '')}
          //   <span className="text-gray-500">::placeholder</span>
          // </>
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
      title: "placeholderOpacity ",
      description: "placeholderOpacity desc",
      plugin: pluginplaceholderOpacity,
      customProps: {
        transformSelector: (selector) => selector.split('::')[0].replace(/^\./, '').replace(/\\/g, ''),
      }
    },
  },
  allPlugins: [
    "fontFamily",
    "fontVariantNumberic",
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
    // "textAlign",
    // "textColor",
    // "textOpacity",
    // "textDecoration",
    // "textTransform",
    // "textOverflow",
    // "verticalAlign",
    // "whitespace",
    // "wordBreak"
  ]
};
