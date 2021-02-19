import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { pageConfig } from "constants/pageConfig";

const SideBar = () => {
  const allCategories = pageConfig?.pluginCategoryPages?.allCategories || [];
  const byCategory = pageConfig?.pluginCategoryPages?.byCategory || {};

  const renderPlugins = (categoryKey, categoryData) => {
    const allPlugins = categoryData?.allPlugins || [];
    // const byPlugin = categoryData?.byPlugin || {};
    return (
      // <ul className="pl-4 mx-1 bg-gray-100 rounded-md">
      <ul className="pl-4 mx-1 bg-gray-200">
        {allPlugins.map((pluginKey) => {
          // const { title } = byPlugin[pluginKey];
          return (
            <li>
              <Link
                // href={`/${categoryKey}#${pluginKey}`}
                href={`/${categoryKey}/${pluginKey}`}
              >
                <a className="px-3 py-1 transition-colors duration-200 relative block hover:text-blue-400 text-gray-700 text-sm">
                  {pluginKey}
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
          <Link
            href={`/${categoryKey}`}
          >
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
        <ul>{renderCategories()}</ul>
      </nav>
    </aside>
  );
};
SideBar.propTypes = {};
SideBar.defaultProps = {};

export default SideBar;
