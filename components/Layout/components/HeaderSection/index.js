import React, { useState } from "react";

/* import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews); */

export default function HeaderSection() {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index) => setIndex(index);

  return (
    <header id="slider-area">
      <nav className="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="img/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="lni-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#slider-area">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">
                  Choix
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#portfolios">
                  Approvisionnement
                </a>
              </li>
              {/*   <li className="nav-item">
                <a className="nav-link page-scroll" href="#pricing">
                  Pricing
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link page-scroll" href="#team">
                  Team
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#subscribe">
                  Contact
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link page-scroll" href="#blog">
                  Blog
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link page-scroll" href="#contact">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <div id="carousel-area">
        <div
          id="carousel-slider"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-slider"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carousel-slider" data-slide-to="1"></li>
            <li data-target="#carousel-slider" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="carousel-img-container">
                <img src="img/slider/bg-4.png" alt="" />
              </div>
              <div className="carousel-caption text-left">
                <h3 className="wow fadeInRight" data-wow-delay="0.2s"></h3>
                <h2 className="wow fadeInRight" data-wow-delay="0.4s">
                  Petrol et ses derives
                </h2>
                <h4 className="wow fadeInRight" data-wow-delay="0.6s">
                  Chez Oholiab Sarl, nous proposons un carburant sûr et fiable
                  en différentes spécifications.
                </h4>
                <a
                  href="#"
                  className="btn btn-lg btn-common btn-effect wow fadeInRight"
                  data-wow-delay="0.9s"
                >
                  Commencer
                </a>
                <a
                  href="#"
                  className="btn btn-lg btn-border wow fadeInRight"
                  data-wow-delay="1.2s"
                >
                  Plus
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img-container">
                <img src="img/slider/bg-5.jpg" alt="" />
              </div>
              <div className="carousel-caption text-center">
                <h3 className="wow fadeInDown" data-wow-delay="0.3s">
                  Nous sommes aussi dans la
                </h3>
                <h2 className="wow bounceIn" data-wow-delay="0.6s">
                  Construction
                </h2>
                <h4 className="wow fadeInUp" data-wow-delay="0.9s">
                  Oholiab Sarl fournie de solutions intégrées dans les secteurs
                  du Bâtiment, de l’Infrastructure et de l’Ingénierie.
                </h4>
                <a
                  href="#"
                  className="btn btn-lg btn-common btn-effect wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  Plus
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img-container">
                <img src="img/slider/bg-7.jpg" alt="" />
              </div>
              <div className="carousel-caption text-center">
                <h3 className="wow fadeInDown" data-wow-delay="0.3s">
                  Prêt pour la
                </h3>
                <h2 className="wow fadeInRight" data-wow-delay="0.6s">
                  Location des voitures
                </h2>
                <h4 className="wow fadeInUp" data-wow-delay="0.6s">
                  Oholiab Sarl s’engage à vous offrir un service premium et une
                  voiture de location qui vous conviennent.
                </h4>
                <a
                  href="#"
                  className="btn btn-lg btn-border wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  Plus
                </a>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel-slider"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control" aria-hidden="true">
              <i className="lni-chevron-left"></i>
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-slider"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control" aria-hidden="true">
              <i className="lni-chevron-right"></i>
            </span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </header>
  );
}
