const { createFilePath } = require('gatsby-source-filesystem');

/**
 * Create all blog post nodes
 *
 * @param {*} { node, boundActionCreators, getNode }
 */
module.exports = exports.onCreateNode = ({
  node,
  boundActionCreators,
  getNode,
}) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
