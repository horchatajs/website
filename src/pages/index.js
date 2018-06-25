import React from 'react';
import meetup from '../img/meetup.svg';

const IndexPage = () => (
  <div>
    <section className="section has-text-centered">
      <h1 className="title is-1 has-text-black has-text-weight-bold">
        Comunidad de JavaScript <br /> en El Salvador
      </h1>
      <a
        href="https://www.meetup.com/es-ES/horchatajs/"
        className="button is-primary is-large"
      >
        <span>Registrate</span>
      </a>
    </section>
    <section className="section has-background-white">
      <div className="columns">
        <div className="column">
          <div class="content">
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
      </div>
    </section>
  </div>
);

export default IndexPage;
