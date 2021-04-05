import React from "react";

export default function FeaturesSection() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pourquoi Choisir Oholiab?</h2>
          <span>Pourquoi</span>
          <p className="section-subtitle">
            Voici les raisons pour lesqulles vous devez nous faire confiance.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="featured-box">
              <div className="featured-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="featured-content">
                <div className="icon-o">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Construction Ecologique</h4>
                <p>
                  Le matériau écologique» ou «matériau biosourcé» répond aux
                  critères techniques habituellement exigés des matériaux de
                  construction.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="featured-box">
              <div className="featured-icon">
                <i className="fas fa-bus"></i>
              </div>
              <div className="featured-content">
                <div className="icon-o">
                  <i className="fas fa-bus"></i>
                </div>
                <h4>Transport International</h4>
                <p>
                  Le transport international devient un jeu d’enfant. Demande de
                  cotation. Un formulaire entièrement dynamique pour vous
                  guider.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="featured-box">
              <div className="featured-icon">
                <i className="fas fa-male"></i>
              </div>
              <div className="featured-content">
                <div className="icon-o">
                  <i className="fas fa-male"></i>
                </div>
                <h4>L’homme au centre des nos activités</h4>
                <p>
                  En effet les ressources humaines sont inéluctables à la
                  réussite des assignations et atteintes des nos objectifs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="featured-box">
              <div className="featured-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="featured-content">
                <div className="icon-o">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Nous avons un personnel accueillant au comptoir</h4>
                <p>
                  Sympathique, serviable, professionnel ... la plupart de nos
                  clients ont quelque chose à dire sur l'attitude du personnel
                  de guichet!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
