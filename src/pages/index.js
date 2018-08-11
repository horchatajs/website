import React from 'react';
import Helmet from 'react-helmet';
import { OutboundLink as ExternalLink } from 'react-ga';

import slack from '../img/slack.svg';
import Avatar from '../components/Avatar';

const getMembersCount = list => list[0].node.profileCount;

const avatarList = (list = [], size = 'is-48x48') => {
  const transformList = list.map(item => item.node.profile);
  return transformList.map(avatar => (
    <div className="is-inline-block" key={avatar.id}>
      <Avatar title={avatar.name} src={avatar.photo} size={size} />
    </div>
  ));
};

const IndexPage = props => {
  const site = props.data.site.siteMetadata;
  const members = props.data.allMemberUser.edges;
  const membersCount = getMembersCount(props.data.allMemberUser.edges);
  const membersAvatar = avatarList(members);

  return (
    <div>
      <Helmet>
        <title>{`${site.title} – ${site.description}`}</title>
      </Helmet>
      <section className="section has-text-centered">
        <h1 className="title is-1 has-text-black has-text-weight-bold">
          Comunidad de JavaScript <br /> en El Salvador
        </h1>
        <ExternalLink
          eventLabel="Link registro"
          to="https://www.meetup.com/es-ES/horchatajs/"
          className="button is-primary is-large has-text-black"
          target="_blank"
          rel="noopener"
        >
          <span>
            Registrate{' '}
            <span className="tag is-vertical-align-middle">
              {membersCount} miembros
            </span>
          </span>
        </ExternalLink>
      </section>
      <section className="section is-rounded has-background-white has-shadow">
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
                <ExternalLink
                  eventLabel="Link código de conducta"
                  to="https://github.com/devs-sv/codigo-de-conducta"
                  target="_blank"
                  rel="noopener"
                >
                  {' '}
                  código de conducta de la comunidad
                </ExternalLink>.
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
              <h3 className="is-size-5 has-text-black">Da una charla</h3>
              <p>
                Tu charla puede ser acerca de Javascript o temas relacionados a
                su uso; cualquier experiencia, proyecto o historia es
                bienvenida. Y no, no necesitas ser alguien experto para dar una
                charla.
              </p>
              <ExternalLink
                eventLabel="Link charla"
                to="https://github.com/horchatajs/charlas"
                className="button is-black is-outlined"
                target="_blank"
                rel="noopener"
              >
                <span>Información de charlas</span>
              </ExternalLink>
            </div>
            <div className="column is-half">
              <h3 className="is-size-5 has-text-black">
                Ayudá en la organización
              </h3>
              <p>
                Tratamos de planear todo en comunidad. Chateá con nosotros en{' '}
                <ExternalLink
                  eventLabel="Link Slack texto"
                  to="http://slack.horchatajs.com/"
                >
                  Slack
                </ExternalLink>{' '}
                o participá en{' '}
                <ExternalLink
                  eventLabel="Link Github texto"
                  to="https://github.com/horchatajs"
                >
                  GitHub
                </ExternalLink>.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="content">
          <div className="columns">
            <div className="column is-half">
              <h2 className="subtitle has-text-black has-text-weight-semibold">
                Patrocinio
              </h2>
              <p>
                ¿Te interesa patrocinar un evento de la comunidad? ¡Escribínos!
              </p>
              <ExternalLink
                eventLabel="Link patrocinio"
                to="mailto:horchatajs@gmail.com?subject=Quiero patrocinar un evento de HorchataJS"
                className="button is-black is-outlined"
                target="_blank"
                rel="noopener"
              >
                <span>Contacto sobre patrocinios</span>
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-text-centered">
        <ExternalLink
          eventLabel="Link Slack botón"
          to="http://slack.horchatajs.com/"
          className="button is-primary is-outlined is-medium has-text-black"
          target="_blank"
          rel="noopener"
        >
          <figure className="image is-24x24" style={{ marginRight: 10 }}>
            <img src={slack} />
          </figure>
          <span>slack.horchatajs.com</span>
        </ExternalLink>
      </section>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query MemberUserQueryAndIndex {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMemberUser {
      edges {
        node {
          profileCount
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
