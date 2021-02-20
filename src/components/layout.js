import React from "react";
import PropTypes from "prop-types";
import SideBar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="fixed top-0 z-40 w-full h-12 inset-x-0 bg-white border-b border-gray-200 flex justify-center items-center">
        <h2 className="">Custom Tailwindcss Config Documentation - </h2>
        <a href="https://github.com/anooprav7/custom-tailwindcss-docs" target="_blank" className="ml-3 hover:border-blue-900 border-2 px-3 py-1 rounded-full">Github</a>
      </header>
      <div className="flex overflow-hidden h-screen">
        <SideBar />
        <main className="flex-grow overflow-scroll mt-11 px-4">{children}</main>
      </div>
    </div>
  );
};
Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
