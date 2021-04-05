import React from "react";

export default function AboutSection() {
  return (
    <section className="featured-bg section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">À Propos de Nous</h2>
          <span>À Propos</span>
          <p className="section-subtitle">
            Oholiab Sarl fournie de solutions intégrées dans les secteurs du
            bâtiment, <br />
            du pétrole et ses dérivés de l’infrastructure et de l’ingénierie.
          </p>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xs-12">
            <img className="img-fluid" src="img/about/img2.png" alt="" />
            <img className="img-fluid" src="img/about/img1.jpeg" alt="" />
          </div>
          <div className="col-md-12 col-lg-6 col-xs-12">
            <h2 className="intro-title">Qui sommes-nous ?</h2>
            <h3 className="title-sub">
              Face aux grandes mutations énergétiques de l’heure, nous nous
              taillons une place de choix et non le moindre dans le secteur des
              hydrocarbures dans le monde. Aguerris et déterminé, nous le
              sommes.
            </h3>
            <p className="intro-desc">
              OHOLIAB a pour secteurs d’activité prioritaire, le trading
              pétrolier et l'affrètement des unités fluviales spécialisée pour
              le convoyage des produits pétroliers. Avec comme leitmotiv de
              numéro 1 mondial.
              <br />
              <br />
              Acteur majeur aux mutations de l’heure dans la chaine
              d’approvisionnement en République Démocratique du Congo et dans le
              monde, nous participons aux projets majeurs de relier l’ensemble
              du pays par un réseau de pipe line.
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="featured-item">
                  <div className="icon">
                    <i className="lni-medall"></i>
                  </div>
                  <h3>
                    <a href="#">Objectif</a>
                  </h3>
                  <div className="featured-content">
                    <p>
                      OHOLIAB se veut être en position avant-gardiste dans le
                      secteur des hydrocarbures, trading et commercialisation.
                      Tels est l’objectif assigné à l’horizon 2025.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="featured-item">
                  <div className="icon">
                    <i className="lni-thumbs-up"></i>
                  </div>
                  <h3>
                    <a href="#">Perspective</a>
                  </h3>
                  <div className="featured-content">
                    <p>
                      Redessiner les contours et inverser les valeurs empiriques
                      n’est pas notre défi, mais par contre le fil conducteur
                      des nos actions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
