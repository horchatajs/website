const axios = require('axios');
const crypto = require('crypto');

/**
 * Create all avatar member nodes
 *
 * @param {*} { boundActionCreators }
 * @returns
 */
module.exports = async ({ boundActionCreators }) => {
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
    axios.get(meetupProfilesEndpoint, meetupProfilesConfig);
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
