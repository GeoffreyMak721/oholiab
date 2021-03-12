import React from "react";

export default function MenuWrap() {
  return (
    <div className="menu-wrap">
      <nav className="menu navbar">
        <div className="icon-list navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#video-area">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                A Propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolios">
                Réalisations
              </a>
            </li>
            {/*  <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#subscribe">
                Souscrire
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <button className="close-button" id="close-button">
        <i className="lnr lnr-cross"></i>
      </button>
    </div>
  );
}
