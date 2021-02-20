import { useState, useContext } from "react";
import _ from "lodash";
import resolveConfig from "tailwindcss/resolveConfig";
import dlv from "dlv";
import clsx from "clsx";
import { copyToClipboard } from "utils";
import { TailwindConfigContext } from "contexts";

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

function generateDefaultConfig (tailwindConfig) {
  return resolveConfig({
    corePlugins: {
      float: false
    },
    ...tailwindConfig
  });
}

function getUtilities(plugin, tailwindConfig) {
  if (!plugin) return {};

  const defaultConfig = generateDefaultConfig(tailwindConfig);

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

export const ClassTable = ({
  plugin,
  id,
  filterProperties,
  preview,
  sort = (x) => x,
  transformSelector = (x) =>
    x.length === 1 ? x : x.slice(1).replace(/\\/g, ""),
  transformProperties = ({ properties }) => properties,
  transformValue,
  custom,
  pluginKey
}) => {
  const [message, setMessage] = useState("");
  const [tailwindConfig, ] = useContext(TailwindConfigContext);
  
  const utilities = {};
  Object.assign(utilities, getUtilities(plugin, tailwindConfig));
  const finalConfig = generateDefaultConfig(tailwindConfig);
  const variantsEnabled = finalConfig.variants[pluginKey];
  // const Variants = finalConfig.variants[pluginKey].map( variant => <span className="mr-1 py-1 px-2 border-blue-600 border-2 rounded-md">{variant}</span>)
  const variants = finalConfig.variants[pluginKey].join(", ")

  const isPluginEnabled = finalConfig?.corePlugins?.includes(pluginKey);

  const PluginState = <div className={clsx({
    "inline-block py-1 px-3 border-green-400 border-2 rounded-full text-sm text-green-400": isPluginEnabled,
    "inline-block py-1 px-3 border-red-400 border-2 rounded-full text-sm text-red-400": !isPluginEnabled
  })}>{isPluginEnabled ? "Enabled" : "Disabled"}</div>

  return (
    <div
      className="border-b border-gray-200 overflow-hidden relative px-8 pt-0 pb-4 rounded-md"
      id={id}
    >
      <h3 className="italic my-2 bg-gray-200 px-3 py-2 rounded-md">Click to copy the CSS class</h3>
      <div className="mb-2">{PluginState}</div>
      <div className="my-2">Variants : [ {variants} ]</div>
      <div
        className={clsx(
          "overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch rounded-md border-2 border-gray-200",
          { "lg:max-h-sm": Object.keys(utilities).length > 12 }
        )}
      >
        <table className="w-full text-left border-collapse bg-white border-gray-400">
          <thead>
            <tr>
              <th className="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white">
                <div className="pb-2 pr-2 border-b border-gray-200 px-4 py-2 bg-gray-100 m-0">
                  Class
                </div>
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
                  className={clsx(
                    "border-b border-gray-200 px-4 py-2 bg-gray-100",
                    {
                      "pr-2": preview
                    }
                  )}
                >
                  Properties
                </div>
              </th>
              {preview && (
                <th className="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0">
                  <div className="px-4 py-2 border-b border-gray-200 bg-gray-100">
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
                      "px-4 py-2 font-mono text-xs text-violet-600 whitespace-nowrap cursor-pointer hover:bg-gray-200",
                      {
                        "border-t border-gray-200": i !== 0
                      }
                    )}
                    onClick={() => {
                      const text = transformSelector(selector);
                      console.log({ text });
                      copyToClipboard(text);
                      setMessage(`${text} copied to clipboard`);
                      setTimeout(() => {
                        setMessage("");
                      }, 3000);
                    }}
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
      {message && (
        <div className="fixed bottom-0 inset-x-0 flex justify-center z-30">
          <div className="bg-gray-500 text-white py-3 px-5 rounded-md w-80 mb-4 text-center">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};
