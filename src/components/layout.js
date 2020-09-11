import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout = ({ page, children }) => {
  let title =
    page === 'digitalgarden'
      ? "A collection of notes, draft blogs I'm currently writing."
      : '';

  return (
    <>
      <Header title={title} />
      <section className="w-3/4 m-auto">
        <div className="">{children}</div>
      </section>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
