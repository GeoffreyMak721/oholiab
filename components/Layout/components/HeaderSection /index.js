import React, { useState } from "react";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function HeaderSection() {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index) => setIndex(index);

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
      <AutoPlaySwipeableViews
        interval={5000}
        direction={"decremental"}
        index={index}
        onChangeIndex={handleChangeIndex}
      >
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
                  Chez Oholiab Sarl, nous proposons un carburant sûr et fiable
                  en différentes spécifications.
                </p>
                <a
                  href="#"
                  className="btn btn-common wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="400ms"
                >
                  PLUS D'INFOS
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-10">
              <div className="contents text-center">
                <h1
                  className="wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="0.3s"
                >
                  LOCATION DES VOITURES
                </h1>
                <p
                  className="lead wow fadeIn"
                  data-wow-duration="1000ms"
                  data-wow-delay="400ms"
                >
                  Oholiab Sarl s’engage à vous offrir un service premium et une
                  voiture de location qui vous conviennent.
                </p>
                <a
                  href="#"
                  className="btn btn-common wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="400ms"
                >
                  PLUS D'INFOS
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-10">
              <div className="contents text-center">
                <h1
                  className="wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="0.3s"
                >
                  CONSTRUCTION
                </h1>
                <p
                  className="lead wow fadeIn"
                  data-wow-duration="1000ms"
                  data-wow-delay="400ms"
                >
                  Oholiab Sarl fournie de solutions intégrées dans les secteurs
                  du Bâtiment, de l’Infrastructure et de l’Ingénierie.
                </p>
                <a
                  href="#"
                  className="btn btn-common wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="400ms"
                >
                  PLUS D'INFOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </AutoPlaySwipeableViews>
      <div id="carousel-area">
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-slider"
            data-slide-to="0"
            className={index === 0 ? "active" : ""}
            onClick={() => handleChangeIndex(0)}
          />
          <li
            data-target="#carousel-slider"
            data-slide-to="1"
            className={index === 1 ? "active" : ""}
            onClick={() => handleChangeIndex(1)}
          />
          <li
            data-target="#carousel-slider"
            data-slide-to="2"
            className={index === 2 ? "active" : ""}
            onClick={() => handleChangeIndex(2)}
          />
        </ol>
      </div>
    </header>
  );
}
