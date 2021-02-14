import { memo } from "react";
import _ from 'lodash';
// import plugin from "tailwindcss/lib/plugins/backgroundPosition";
// import defaultTailwindConfig from "tailwindcss/stubs/defaultConfig.stub"
import defaultTheme from "tailwindcss/defaultTheme";
import resolveConfig from "tailwindcss/resolveConfig";
import dlv from "dlv";
import clsx from "clsx";

let normalizeProperties = function (input) {
  if (typeof input !== "object") return input;
  if (Array.isArray(input)) return input.map(normalizeProperties);
  return Object.keys(input).reduce((newObj, key) => {
    let val = input[key];
    let newVal = typeof val === "object" ? normalizeProperties(val) : val;
    newObj[
      key.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1}-${p2.toLowerCase()}`)
    ] = newVal;
    return newObj;
  }, {});
};

function getUtilities(plugin) {
  if (!plugin) return {};

  const custom = {
    fontSize: {
      lgg: ['1.77rem', { lineHeight: '1.77rem' }],
    }
  }

const tailTheme = {...defaultTheme, ...custom };

// const defaultConfig = resolveConfig({ theme: defaultTheme });
const defaultConfig = resolveConfig({ theme: tailTheme });

  const utilities = {};
  plugin()({
    addUtilities: (utils) => {
      utils = Array.isArray(utils) ? utils : [utils];
      for (let i = 0; i < utils.length; i++) {
        for (let prop in utils[i]) {
          utilities[prop] = normalizeProperties(utils[i][prop]);
        }
      }
    },
    config: () => ({
      future: "all"
    }),
    theme: (path, defaultValue) => dlv(defaultConfig.theme, path, defaultValue),
    variants: () => [],
    e: (x) => x.replace(/([:.])/g, "\\$1"),
    corePlugins: () => true
  });
  return utilities;
}
function castArray(value) {
  return Array.isArray(value) ? value : [value];
}

function stringifyProperties(
  properties,
  { filter = () => true, transformValue = (x) => x, indent = 0 } = {}
) {
  let lines = [];
  Object.keys(properties).forEach((property) => {
    if (isObject(properties[property])) {
      lines.push(`${property} {`);
      lines.push(
        stringifyProperties(properties[property], {
          filter,
          transformValue,
          indent: indent + 1
        })
      );
      lines.push("}");
    } else {
      castArray(properties[property]).forEach((value, i) => {
        if (!filter(property, value, properties)) return;
        lines.push(
          `${"  ".repeat(indent)}${property}: ${transformValue(value)};`
        );
      });
    }
  });
  return lines.join("\n");
}

function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

// const preview =(x) => x;
const preview = false;
const sort = (x) => x;
const filterProperties = (x) => x;
const transformValue = (x) => x;
const transformSelector = (x) =>
  x.length === 1 ? x : x.slice(1).replace(/\\/g, "");
const transformProperties = ({ properties }) => properties;

export const ClassTable = ({plugin}) => {
  const utilities = {};
  Object.assign(utilities, getUtilities(plugin));

  return (
    <div className="border-b border-gray-200 overflow-hidden relative">
      <div level={2} id="class-reference" toc={true} className="relative">
        <span className="sr-only">Default class reference</span>
      </div>
      <div
        className={clsx(
          "overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch",
          { "lg:max-h-sm": Object.keys(utilities).length > 12 }
        )}
      >
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0">
                <div className="pb-2 pr-2 border-b border-gray-200">Class</div>
              </th>
              <th
                className={clsx(
                  "z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0",
                  {
                    "hidden sm:table-cell": preview
                  }
                )}
              >
                <div
                  className={clsx("pb-2 pl-2 border-b border-gray-200", {
                    "pr-2": preview
                  })}
                >
                  Properties
                </div>
              </th>
              {preview && (
                <th className="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0">
                  <div className="pb-2 pl-2 border-b border-gray-200">
                    <span className="sr-only">Preview</span>&nbsp;
                  </div>
                </th>
              )}
            </tr>
          </thead>
          <tbody className="align-baseline">
            {sort(Object.keys(utilities)).map((utility, i) => {
              let selector = utility;
              let properties = utilities[selector];

              return (
                <tr key={utility}>
                  <td
                    className={clsx(
                      "py-2 pr-2 font-mono text-xs text-violet-600 whitespace-nowrap",
                      {
                        "border-t border-gray-200": i !== 0
                      }
                    )}
                  >
                    {transformSelector(selector)}
                  </td>
                  <td
                    className={clsx(
                      "py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre",
                      {
                        "border-t border-gray-200": i !== 0,
                        "hidden sm:table-cell sm:pr-2": preview
                      }
                    )}
                  >
                    {stringifyProperties(
                      transformProperties({ selector, properties }),
                      {
                        filter: filterProperties,
                        transformValue
                      }
                    )}
                  </td>
                  {preview &&
                    preview(properties, {
                      className: i === 0 ? "" : "border-t border-gray-200"
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};