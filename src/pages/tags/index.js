import React from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div className="container is-content">
    <Helmet title={`Etiquetas | ${title}`} />
    <section className="section">
      <div className="content">
        <h1 className="is-size-3 has-text-black has-text-weight-bold">
          Etiquetas
        </h1>
      </div>
      {group && group.length ? (
        <div className="tags">
          {group.map(tag => (
            <Link
              className="tag is-black"
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              key={tag.fieldValue}
            >
              <span>
                {tag.fieldValue} ({tag.totalCount})
              </span>
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  </div>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
