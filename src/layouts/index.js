import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.scss';

const TemplateWrapper = ({ children }) => (
  <div className="container">
    <Helmet>
      <meta charSet="utf-8" />
      <title>HorchataJS – Comunidad de JavaScript en El Salvador</title>
      <link rel="canonical" href="https://www.horchatajs.com" />
    </Helmet>
    <Navbar />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
