import React, { useContext } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { pageConfig } from "constants/pageConfig";
import { TailwindConfigContext } from "contexts";
import resolveConfig from "tailwindcss/resolveConfig";
import clsx from "clsx";

function generateDefaultConfig(tailwindConfig) {
  return resolveConfig({
    corePlugins: {
      float: false
    },
    ...tailwindConfig
  });
}

const SideBar = () => {
  const allCategories = pageConfig?.pluginCategoryPages?.allCategories || [];
  const byCategory = pageConfig?.pluginCategoryPages?.byCategory || {};

  const [tailwindConfig] = useContext(TailwindConfigContext);

  const finalConfig = generateDefaultConfig(tailwindConfig);

  const renderPlugins = (categoryKey, categoryData) => {
    const allPlugins = categoryData?.allPlugins || [];
    const byPlugin = categoryData?.byPlugin || [];

    return (
      <ul className="pl-4 mx-1 bg-gray-100">
        {allPlugins.map((pluginKey) => {
          const isPluginEnabled = finalConfig?.corePlugins?.includes(pluginKey);
          const {title} = byPlugin[pluginKey];
          return (
            <li>
              <Link
                href={`/${categoryKey}/${pluginKey}`}
              >
                <a className="px-3 py-1 transition-colors duration-200 relative flex hover:text-blue-400 text-gray-700 text-sm justify-between">
                  <span>{title}</span>
                  <span
                    className={clsx({
                      "inline-block py-1 px-1 border-green-400 border-1 rounded-full text-green-400 text-xs": isPluginEnabled,
                      "inline-block py-1 px-1 border-red-400 border-0 rounded-full text-xs text-red-400": !isPluginEnabled
                    })}
                  >
                    {isPluginEnabled ? "Enabled" : "Disabled"}
                  </span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderCategories = () => {
    return allCategories.map((categoryKey, idx) => {
      const { title } = byCategory[categoryKey];
      return (
        <li>
          <Link href={`/${categoryKey}`}>
            <a className="block px-3 mb-2 tracking-wide font-semibold text-sm text-gray-900 mt-5 hover:text-blue-500">
              {title}
            </a>
          </Link>
          {renderPlugins(categoryKey, byCategory[categoryKey])}
        </li>
      );
    });
  };

  return (
    <aside className="w-60 mt-11 overflow-scroll flex-grow-0 flex-shrink-0 bg-gray-50">
      <nav>
        <ul>
        <li>
          <Link href={`/`}>
            <a className="block px-3 mb-2 tracking-wide font-semibold text-sm text-gray-900 mt-5 hover:text-blue-500">
              Home
            </a>
          </Link>
          <ul className="pl-4 mx-1 bg-gray-100">
          <li>
              <Link
                href={`/config`}
              >
                <a className="px-3 py-1 transition-colors duration-200 relative flex hover:text-blue-400 text-gray-700 text-sm justify-between">
                  <span>Config</span>
                </a>
              </Link>
            </li>
          </ul>
        </li>
          {renderCategories()}
        </ul>
      </nav>
    </aside>
  );
};
SideBar.propTypes = {};
SideBar.defaultProps = {};

export default SideBar;
