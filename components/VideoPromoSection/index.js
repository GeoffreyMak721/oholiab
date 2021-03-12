import React from "react";

export default function VideoPromoSection() {
  return (
    <section
      className="video-promo section"
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-12"></div>
          <div className="col-md-8 col-sm-12">
            <div className="video-promo-content text-center">
              <h2
                className="wow zoomIn"
                data-wow-duration="1000ms"
                data-wow-delay="100ms"
              >
                Nous avons une Expertise de plus de 36 ans
              </h2>
              <p
                className="wow zoomIn"
                data-wow-duration="1000ms"
                data-wow-delay="100ms"
              >
                Et en termes simples notre système de location est le meilleur,
                car nous vous apportons une valeur imbattable et une
                tranquillité d’esprit tout au long de votre voyage en voiture de
                location.
              </p>
              <a href="#" className="btn btn-border">
                À Propos de Nous
              </a>
            </div>
          </div>
          <div className="col-md-2 col-sm-12"></div>
        </div>
      </div>
    </section>
  );
}
