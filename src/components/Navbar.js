import React, { Component } from 'react';
import Link from 'gatsby-link';
import { OutboundLink as ExternalLink } from 'react-ga';
import logo from '../img/horchatajs-logo.svg';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import github from '../img/github.svg';
import instagram from '../img/instagram.svg';

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleMenuToggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  componentDidMount(){
    document.querySelectorAll(".navbar-item").forEach(element=> {
      element.addEventListener("click",()=> {
        this.forceMenuToClose();
      });
    });
    window.forceMenuToClose = this.forceMenuToClose.bind(this)
  };

  forceMenuToClose = ()=>{
    this.setState({isOpen: false});
  };

  render() {
    const { isOpen } = this.state;
    return (
      <nav
        className="navbar is-vertical-spaced is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" 
            className="navbar-item">
            <img src={logo} alt="HorchataJS" />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={this.handleMenuToggle}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className={`navbar-menu ${isOpen && 'is-active'}`}>
          <div className="navbar-start">
            <Link to="/blog" 
              className="navbar-item">
              Blog
            </Link>
          </div>
          <div className="navbar-end is-flex-touch is-justify-center">
            <ExternalLink 
              eventLabel="Icono Facebook"
              to="https://www.facebook.com/horchatajs/"
              className="navbar-item"
              target="_blank"
              rel="noopener"
            >
              <figure className="image is-16x16">
                <img src={facebook} />
              </figure>
            </ExternalLink>
            <ExternalLink
              eventLabel="Icono Twitter"
              to="https://twitter.com/HorchataJS"
              className="navbar-item"
              target="_blank"
              rel="noopener"
            >
              <figure className="image is-16x16">
                <img src={twitter} />
              </figure>
            </ExternalLink>
            <ExternalLink
              eventLabel="Icono Instagram"
              to="https://www.instagram.com/horchatajs/"
              className="navbar-item"
              target="_blank"
              rel="noopener"
            >
              <figure className="image is-16x16">
                <img src={instagram} />
              </figure>
            </ExternalLink>
            <ExternalLink
              eventLabel="Icono Github"
              to="https://github.com/horchatajs"
              className="navbar-item"
              target="_blank"
              rel="noopener"
            >
              <figure className="image is-16x16">
                <img src={github} />
              </figure>
            </ExternalLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;