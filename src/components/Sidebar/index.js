import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { pageConfig } from "constants/pageConfig";

const SideBar = () => {
  const allCategories = pageConfig?.pluginCategoryPages?.allCategories || [];
  const byCategory = pageConfig?.pluginCategoryPages?.byCategory || {};

  const renderPlugins = (categoryKey, categoryData) => {
    const allPlugins = categoryData?.allPlugins || [];
    return (
      <ul className="ml-4">
        {allPlugins.map((pluginKey) => {
          return (
            <li>
              <Link
                href={`/${categoryKey}#${pluginKey}`}
              >
                <a className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500">
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
      return (
        <li>
          <div
            className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900 mt-8"
          >
            {categoryKey}
          </div>
          {renderPlugins(categoryKey, byCategory[categoryKey])}
        </li>
      );
    });
  };

  return (
    <aside className="w-52 mt-11 overflow-scroll">
      <nav>
        <ul>{renderCategories()}</ul>
      </nav>
    </aside>
  );
};
SideBar.propTypes = {};
SideBar.defaultProps = {};

export default SideBar;
