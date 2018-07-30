import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';

import Navbar from '../components/Navbar';
import './all.scss';

const TemplateWrapper = ({ children }) => (
  <div className="container">
    <Helmet>
      <meta charSet="utf-8" />
      {/* Facebook Open Graph */}
      <meta property="og:url" content="https://www.horchatajs.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="HorchataJS" />
      <meta
        property="og:image"
        content="https://www.horchatajs.com/img/share-logo.png"
      />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta
        property="og:description"
        content="Comunidad de JavaScript en El Salvador"
      />
      <meta property="og:site_name" content="HorchataJS" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@horchatajs" />
      <meta name="twitter:url" content="https://www.horchatajs.com" />
      <meta name="twitter:title" content="HorchataJS" />
      <meta
        name="twitter:description"
        content="Comunidad de JavaScript en El Salvador"
      />
      <meta
        name="twitter:image"
        content="https://www.horchatajs.com/img/share-logo.png"
      />
    </Helmet>
    <Navbar />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
