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
        <div className="content">
          <div className="columns">
            <div className="column is-half">
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
            <div className="column is-half">{membersAvatar}</div>
          </div>
        </div>
        <hr />
        <div className="content">
          <h2 className="subtitle has-text-black has-text-weight-semibold">
            Participá
          </h2>
          <div className="columns">
            <div className="column is-half">
              <h3 className="is-size-5 has-text-black">Da una plática</h3>
              <p>
                Tu plática puede ser acerca de Javascript o temas relacionados a
                su uso; cualquier experiencia, proyecto o historia es
                bienvenida. Y no, no necesitas ser alguien experto para dar una
                plática.
              </p>
              <a
                href="https://github.com/horchatajs/platicas"
                className="button is-black is-outlined"
              >
                <span>Información de pláticas</span>
              </a>
            </div>
            <div className="column is-half">
              <h3 className="is-size-5 has-text-black">
                Ayudá en la organización
              </h3>
              <p>
                Tratamos de planear todo en comunidad. Chateá con nosotros en{' '}
                <a href="http://slack.horchatajs.com/">Slack</a> o participa en{' '}
                <a href="https://github.com/horchatajs">GitHub</a>.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="content">
          <div className="columns">
            <div className="column is-half">
              <h2 className="subtitle has-text-black has-text-weight-semibold">
                Patrociná
              </h2>
              <p>
                ¿Te interesa patrocinar un evento de la comunidad? ¡Escribínos!
              </p>
              <a
                href="mailto:horchatajs@gmail.com"
                className="button is-black is-outlined"
              >
                <span>Información sobre patrocinios</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-text-centered">
        <a
          href="http://slack.horchatajs.com/"
          className="button is-primary is-outlined is-medium has-text-black"
        >
          <span>slack.horchatajs.com</span>
        </a>
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
