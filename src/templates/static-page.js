import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';

export const StaticPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <h2>{title}</h2>
      <PageContent content={content} />
    </div>
  );
};

StaticPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const StaticPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <StaticPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

StaticPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default StaticPage;

export const staticPageQuery = graphql`
  query StaticPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
