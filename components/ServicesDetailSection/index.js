import React from "react";

export default function ServicesDetailSection() {
  return (
    <section id="services-detail" className="blog section">
      <div className="container">
        <div className="section-header">
          <h2
            className="section-title wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            OHOLIAB <span>SARL</span>
          </h2>
          <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
          <p
            className="section-subtitle wow fadeInDown"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Oholiab Sarl fournie de solutions intégrées dans les secteurs du
            bâtiment, <br />
            du pétrole et ses dérivés de l’infrastructure et de l’ingénierie.
          </p>
        </div>

        <div className="row">
          <div className="col-xl-4 col-sm-6 col-xs-12 blog-item">
            <div
              className="blog-item-wrapper wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="blog-item-img">
                <a href="#contact">
                  <img src="/img/blog/img4.jpeg" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a href="#">Pétrol & ses Dérivés</a>
                </h3>

                <p>
                  La qualité de l’air est un problème mondial et chez Zenith
                  Ressort nous sommes déterminés à ce que le carburant plus
                  propre fasse partie de la solution. Nous travaillons en
                  collaboration avec les gouvernements afin de renforcer les
                  normes de carburant. Les Carburants plus propres peuvent déjà
                  apporter des avantages dans 3 domaines: <br />
                  1. Vehicules plus performants. <br /> 2. Une santé améliorée
                  et une meilleure qualité de vie. <br />
                  3. Des Revenues économiques.
                </p>
                <a href="#contact" className="btn btn-common btn-rm">
                  PLUS D'INFOS
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-sm-6 col-xs-12 blog-item">
            <div
              className="blog-item-wrapper wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="blog-item-img">
                <a href="#contact">
                  <img src="/img/blog/img2.jpg" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a href="#">Construction</a>
                </h3>

                <p>
                  OHOLIAB Sarl fournit des solutions intégrées dans les secteurs
                  du bâtiment, de l’infrastructure et de l’ingénierie. Le Groupe
                  est présent en République Démocratique du Congo, et sur le
                  reste du continent africain. Dépuis 1983, le Groupe a joué un
                  rôle majeur dans le développement des infrastructures de
                  l’Afrique se forgeant ainsi une bonne réputation dans le
                  domaine de l’innovation et du professionnalisme sur le plan
                  national.
                </p>
                <a href="#contact" className="btn btn-common btn-rm">
                  PLUS D'INFOS
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-sm-6 col-xs-12 blog-item">
            <div
              className="blog-item-wrapper wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="blog-item-img">
                <a href="#contact">
                  <img src="/img/blog/img3.jpg" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a href="#">Location Voitures</a>
                </h3>

                <p>
                  OHOLIAB Sarl est une entreprise de location des voitures. On
                  s’engage à vous offrir un service premium et une voiture de
                  location qui vous convienne. Notre personnel hautement
                  qualifié fera tout pour vous satisfaire. Que vous ayez besoin
                  d’une petite voiture, d’une voiture compacte ou d’un break
                  spacieux, notre flotte vous propose des véhicules adéquats et
                  confortables, en moyenne six mois d’ancienneté, de grandes
                  marques telles que BMW, Audi, etc.
                </p>
                <a href="#contact" className="btn btn-common btn-rm">
                  PLUS D'INFOS
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-sm-6 col-xs-12 blog-item">
            <div
              className="blog-item-wrapper wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="blog-item-img">
                <a href="#contact">
                  <img src="/img/blog/img1.jpg" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a href="#">Transport International</a>
                </h3>

                <p>
                  Avec Zenith Ressort, comparez, réservez et gérez vos
                  opérations d’import-export. Le transport international devient
                  un jeu d’enfant. Demande de cotation. Un formulaire
                  entièrement dynamique pour vous guider. Multiples offres. Les
                  prestataires appropriés vous font les meilleures offres. Un
                  track & trace vous permet de localiser votre marchandise à
                  tout moment. Un processus intuitif, simple et complet. Vous
                  servir et vous voir satisfait, est notre plus grand objectif.
                </p>
                <a href="#contact" className="btn btn-common btn-rm">
                  PLUS D'INFOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
