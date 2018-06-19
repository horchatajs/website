import React from 'react';
import PropTypes from 'prop-types';
import { StaticPageTemplate } from '../../templates/static-page';

const JoinPagePreview = ({ entry, widgetFor }) => (
  <StaticPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

StaticPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default StaticPagePreview;
