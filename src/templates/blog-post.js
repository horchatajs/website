import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  date,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div className="container is-content">
      <Helmet>
        <title>
          {title}
          {' '}
          – HorchataJS
        </title>
        <body className="has-background-white" />
      </Helmet>
      <section className="section">
        <div className="content">
          <h1 className="is-size-3 has-text-black has-text-weight-bold">
            {title}
          </h1>
          <p className="has-text-black">
            Publicado el
            {' '}
            <span>{date}</span>
          </p>
          <PostContent content={content} />
        </div>
        <hr className="has-background-black" />
        {tags && tags.length ? (
          <div className="tags">
            {tags.map(tag => (
              <Link
                className="tag is-black"
                to={`/tags/${kebabCase(tag)}/`}
                key={`${tag}tag`}
              >
                <span>{tag}</span>
              </Link>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      date={post.frontmatter.date}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "D/M/YYYY")
        title
        tags
      }
    }
  }
`;
