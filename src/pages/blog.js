import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const site = data.site.siteMetadata;

    return (
      <div className="container is-content" onClick={()=> window.forceMenuToClose()}>
        <Helmet>
          <title>{`${site.title} – Blog`}</title>
        </Helmet>
        {posts.map(({ node: post }) => (
          <Link className="post is-block" to={post.fields.slug} key={post.id}>
            <section className="section is-rounded has-background-white has-shadow has-shadow-hovered">
              <div className="content">
                <h2 className="is-size-4 has-text-black has-text-weight-bold">
                  {post.frontmatter.title}
                </h2>
                <p>{post.excerpt}</p>
                <p className="has-text-grey-light">
                  Publicado el <span>{post.frontmatter.date}</span>
                </p>
              </div>
            </section>
          </Link>
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
  query BlogQueryAndIndex {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "D/M/YYYY")
          }
        }
      }
    }
  }
`;
