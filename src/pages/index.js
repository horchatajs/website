import React from 'react';

import Avatar from '../components/Avatar';

const avatarList = (list = [], size = 'is-48x48') => {
  const transformList = list.map(item => item.node.profile);
  return transformList.map(avatar => (
    <div className="is-inline-block" key={avatar.id}>
      <Avatar title={avatar.name} src={avatar.photo} size={size} />
    </div>
  ));
};

const IndexPage = props => {
  const members = props.data.allMemberUser.edges;
  const membersAvatar = avatarList(members);
  return (
    <div>
      <section className="section has-text-centered">
        <h1 className="title is-1 has-text-black has-text-weight-bold">
          Comunidad de JavaScript <br /> en El Salvador
        </h1>
        <a
          href="https://www.meetup.com/es-ES/horchatajs/"
          className="button is-primary is-large has-text-black"
        >
          <span>Registrate</span>
        </a>
      </section>
      <section className="section has-background-white">
        <div className="columns">
          <div className="column is-half">
            <div className="content">
              <h2 className="subtitle has-text-black has-text-weight-semibold">
                Sobre nosotros
              </h2>
              <p>
                HorchataJS es un espacio gratuito y abierto para aprender y
                compartir sobre JavaScript. Acercáte y aprendé con nosotros.
              </p>
              <p>
                Se espera que todos los miembros sigan el{' '}
                <a href="https://github.com/devs-sv/codigo-de-conducta">
                  {' '}
                  código de conducta de la comunidad
                </a>.
              </p>
            </div>
          </div>
          <div className="column is-half">{membersAvatar}</div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query MemberUserQuery {
    allMemberUser {
      edges {
        node {
          profile {
            id
            name
            photo
          }
        }
      }
    }
  }
`;
