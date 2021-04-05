import React from "react";

export default function AboutSection() {
  return (
    <section className="featured-bg section bg-white shadow-0">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Consommation pétrolière</h2>
          <span>Consommation</span>
          <p className="section-subtitle"></p>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xs-12">
            <img className="img-fluid" src="img/about/img3.png" alt="" />
          </div>
          <div className="col-md-12 col-lg-6 col-xs-12">
            {/* <h2 className="intro-title">Qui sommes-nous ?</h2> */}
            <h3 className="title-sub"></h3>
            <p className="intro-desc">
              Dans un monde où le pétrole est une marchandise vitale pour les
              nations, sa production ainsi que sa consommation est un enjeu
              stratégique. En 2013, l’humanité consommait 90.7 millions de
              barils par jour (soit 159 litres par baril) pour alimenter son
              économie et son mode de vie. La demande mondiale ne connait aucun
              ralentissement. De plus, l’arrivée sur le marché d’une population
              chinoise et indienne qui s’équipe de plus en plus de parc
              automobile, augmente de manière exponentielle la consommation
              pétrolière. L’appétit pour cette denrée dépend à la fois du modèle
              économique et du nombre de consommateurs par pays. Ainsi, nous
              avons une part active mondial.
              <br />
              <br />
              La consommation pétrolière ne cesse de croître depuis les années
              60, passant de 59.5 à 90.7 million de barils par jour, soit 13.7
              milliards de litres de pétrole journalier. La consommation
              annuelle en 2013 était donc de 33.1 milliards de barils. La carte
              ci-dessus souligne son inégale consommation, notamment
              en Afrique où la moyenne est de moins de 100 000 barils par jour.
              Plus globalement, les 12 premiers pays consommateurs captent
              58.65% du pétrole sur un total de 193 nations reconnues par l’ONU.
            </p>
            {/* <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="featured-item">
                  <div className="icon">
                    <i className="lni-medall"></i>
                  </div>
                  <h3>
                    <a href="#">redessiner la voie</a>
                  </h3>
                  <div className="featured-content">
                    <p>
                      Acteur majeur aux mutations de l’heure dans la chaine
                      d’approvisionnement en République Démocratique du Congo et
                      dans le monde, nous participons aux projets majeurs de
                      relier l’ensemble du pays par un réseau de pipe line.
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
                      des nos actions. Face aux grandes mutations énergétiques
                      de l’heure, nous nous taillons une place de choix et non
                      le moindre dans le secteur des hydrocarbures dans le
                      monde. Aguerris et déterminé, nous le sommes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
           */}
          </div>
        </div>
      </div>
    </section>
  );
}
