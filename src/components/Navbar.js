import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/horchatajs-logo.svg';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import github from '../img/github.svg';

const Navbar = () => (
  <nav
    className="navbar is-vertical-spaced is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img src={logo} alt="HorchataJS" />
      </Link>

      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link to="/participa" className="navbar-item">
          Participa
        </Link>
        <Link to="/blog" className="navbar-item">
          Blog
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="/" className="navbar-item">
          <figure className="image is-16x16">
            <img src={facebook} />
          </figure>
        </Link>
        <Link to="/" className="navbar-item">
          <figure className="image is-16x16">
            <img src={twitter} />
          </figure>
        </Link>
        <Link to="/" className="navbar-item">
          <figure className="image is-16x16">
            <img src={github} />
          </figure>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
