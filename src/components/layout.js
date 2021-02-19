import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <header className="fixed top-0 z-40 w-full h-12 inset-x-0 bg-gray-400">Header</header>
      <div className="flex overflow-hidden h-screen">
        <SideBar />
        <main className="flex-grow overflow-scroll mt-11">{children}</main>
      </div>
    </div>
  );
}
Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;