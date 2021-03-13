import React from "react";

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h2
            className="section-title wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Nos <span>Services</span>
          </h2>
          <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
          <p
            className="section-subtitle wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          ></p>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="item-boxes wow fadeInDown" data-wow-delay="0.2s">
              <div className="icon">
                <i className="fas fa-gas-pump"></i>
              </div>
              <h4>Pétrol et ses Dérivés</h4>
              <p>
                Nous proposons un carburant sûr et fiable en différentes
                spécifications
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="item-boxes wow fadeInDown" data-wow-delay="0.4s">
              <div className="icon">
                <i className="fas fa-building"></i>
              </div>
              <h4>Construction de Bâtiments</h4>
              <p>
                Nous mettons notre contribution à la construction des écoles,
                bâtiments publics etc…
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="item-boxes wow fadeInDown" data-wow-delay="0.6s">
              <div className="icon">
                <i className="fas fa-igloo"></i>
              </div>
              <h4>Travaux de Fondation</h4>
              <p>
                On fournie de solutions intégrées dans les secteurs du bâtiment,
                de l’infrastructure et de l’ingénierie.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="item-boxes wow fadeInDown" data-wow-delay="0.8s">
              <div className="icon">
                <i className="fas fa-tools"></i>
              </div>
              <h4>Les Dernières Réparations Technologiques</h4>
              <p>
                Les Dernières réparations technologiques renforcent, réparent la
                détérioration etc…
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="item-boxes wow fadeInDown" data-wow-delay="1s">
              <div className="icon">
                <i className="fas fa-ship"></i>
              </div>
              <h4>Import-Export</h4>
              <p>
                Avec Oholiab, comparez, réservez et gérez vos opérations
                d’import–export.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
              <div className="icon">
                <i className="fas fa-car"></i>
              </div>
              <h4>Location des Voitures</h4>
              <p>
                Oholiab s’engage à vous offrir un service premium et une voiture
                de location qui vous conviennent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
