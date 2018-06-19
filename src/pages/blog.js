import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        {posts.map(({ node: post }) => (
          <div key={post.id}>
            <p>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <Link to={post.fields.slug}>Keep Reading →</Link>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
