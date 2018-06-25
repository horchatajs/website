require('dotenv').config({
  path: `.env`,
});
const _ = require('lodash');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');
const { createFilePath } = require('gatsby-source-filesystem');

var meetupMembersConfig = {
  params: {
    sign: true,
    key: process.env.MEETUP_API_KEY,
    group_urlname: 'horchatajs',
    desc: true,
    order: 'joined',
    page: 40,
  },
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

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

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
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

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  const fetchMembers = () =>
    axios.get('https://api.meetup.com/2/profiles', meetupMembersConfig);
  const res = await fetchMembers();

  res.data.results.map(user => {
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

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    userNode.internal.contentDigest = contentDigest;

    createNode(userNode);
  });

  return;
};
