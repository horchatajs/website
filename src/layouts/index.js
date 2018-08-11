import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.scss';

const TemplateWrapper = ({
  children,
  data: {
    site: { siteMetadata: meta },
  },
}) => (
  <div className="container">
    <Helmet>
      <meta charSet="utf-8" />
      {/* Facebook Open Graph */}
      <meta property="og:url" content={meta.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta
        property="og:image"
        content={`${meta.siteUrl}/img/share-logo.png"`}
      />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:site_name" content={meta.title} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={meta.siteUrl} />
      <meta name="twitter:url" content={meta.siteUrl} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta
        name="twitter:image"
        content={`${meta.siteUrl}/img/share-logo.png"`}
      />
      <body className="has-background-white-ter" />
    </Helmet>
    <Navbar />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        twitterHandler
        facebookHandler
      }
    }
  }
`;
