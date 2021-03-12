import React from "react";

export default function HeaderSection() {
  return (
    <header id="video-area" data-stellar-background-ratio="0.5">
      <div id="block" data-vide-bg="video/video"></div>
      <div className="fixed-top">
        <div className="container">
          <div className="logo-menu">
            <a href="index.html" className="logo">
              <img
                src="img/logo/logo.png"
                alt="oholiab-logo"
                className="logo-dark"
              />
              <img
                src="img/logo/logo-light.png"
                alt="oholiab-logo"
                className="logo-light"
              />
            </a>
            <button className="menu-button" id="open-button">
              <i className="lnr lnr-menu"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="overlay overlay-2"></div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <div className="contents text-center">
              <h1
                className="wow fadeInDown"
                data-wow-duration="1000ms"
                data-wow-delay="0.3s"
              >
                PETROL ET SES DERIVES
              </h1>
              <p
                className="lead wow fadeIn"
                data-wow-duration="1000ms"
                data-wow-delay="400ms"
              >
                Simple, Rapide, Fiable, Transparent. Comparez, Réservez et Gérez
                vos opérations d’Import-Export.
              </p>
              <a
                href="#"
                className="btn btn-common wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="400ms"
              >
                <i class="fas fa-info-circle"></i> PLUS D'INFOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
