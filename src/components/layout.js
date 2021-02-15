import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <header className="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex">Header</header>
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