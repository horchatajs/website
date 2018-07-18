require('dotenv').config({ path: `.env` });
const _ = require('lodash');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');
const { createFilePath } = require('gatsby-source-filesystem');

/**
 * Create all blog post pages
 *
 * @param {*} { boundActionCreators, graphql }
 * @returns
 */
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  // Query data used for posts
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // Loop every markdown file and create a post page for each one
    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
        ),
        // Pass additional data
        context: {
          id,
        },
      });
    });

    let tags = [];
    // Loop every post and put all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });

    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Create a tag page for each tag
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      });
    });
  });
};

/**
 * Create all blog post nodes
 *
 * @param {*} { node, boundActionCreators, getNode }
 */
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

/**
 * Create all avatar member nodes
 *
 * @param {*} { boundActionCreators }
 * @returns
 */
exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  const meetupProfilesEndpoint = 'https://api.meetup.com/2/profiles';

  const meetupProfilesConfig = {
    params: {
      sign: true,
      key: process.env.MEETUP_API_KEY,
      group_urlname: 'horchatajs',
      desc: true,
      order: 'joined',
      page: 40,
    },
  };

  // Fetch members information
  const fetchMembers = () =>
    axios.get(meetupProfilesConfig, meetupProfilesEndpoint);
  const response = await fetchMembers();

  response.data.results.map(user => {
    // Setup user node
    const userNode = {
      id: `${user.member_id}`,
      parent: `__SOURCE__`,
      internal: {
        type: `MemberUser`,
      },
      children: [],
      profile: {
        id: user.member_id,
        name: user.name,
        photo: user.photo.thumb_link,
      },
    };

    // Cryptographic hash needed for the node creation
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    userNode.internal.contentDigest = contentDigest;

    // Create the user node
    createNode(userNode);
  });

  return;
};
