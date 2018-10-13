import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div className='container is-content'>
    <section className='section'>
      <div className='content has-text-centered'>
        <p className='title is-1 has-text-black'>404</p>
        <h1 className='subtitle has-text-black has-text-weight-bold'>
          Página no encontrada
        </h1>
        <Link className='button is-black is-outlined' to='/'>
          Ir al inicio
        </Link>
      </div>
    </section>
  </div>
)

export default NotFoundPage
