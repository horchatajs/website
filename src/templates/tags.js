import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <span>{post.node.frontmatter.title}</span>
        </Link>
      </li>
    ));
    const tag = this.props.pathContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} ${
      totalCount === 1 ? 'publicación' : 'publicaciones'
    } con la etiqueta “${tag}”`;

    return (
      <div className="container is-content">
        <Helmet title={`${tag} | ${title}`} />
        <section className="section">
          <div className="content">
            <h1 className="is-size-3 is-size-4-mobile has-text-black has-text-weight-bold">
              {tagHeader}
            </h1>
            <ul>{postLinks}</ul>
            <p>
              <Link to="/tags/">Ver todas las etiquetas</Link>
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
