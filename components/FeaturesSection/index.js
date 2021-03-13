import React from "react";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="section"
      data-stellar-background-ratio="0.2"
    >
      <div className="container">
        {/* <div className="section-header">
          <h2
            className="section-title wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Amazing <span>Features</span>
          </h2>
          <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
          <p
            className="section-subtitle wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy <br /> nibh euismod tincidunt ut laoreet dolore magna.
          </p>
        </div>
         */}
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
            <div
              className="content-right text-left wow fadeInLeft animated"
              data-wow-offset="10"
            >
              <div className="box-item left">
                <span className="icon">
                  <i className="far fa-building"></i>
                </span>
                <div className="text">
                  <h4>Construction Ecologique</h4>
                  <p>
                    Le matériau écologique» ou «matériau biosourcé» répond aux
                    critères techniques habituellement exigés des matériaux de
                    construction performances techniques et fonctionnelles, etc.
                  </p>
                </div>
              </div>
              <div className="box-item left">
                <span className="icon">
                  <i className="fas fa-bus"></i>
                </span>
                <div className="text">
                  <h4>Transport International</h4>
                  <p>
                    Le transport international devient un jeu d’enfant. Demande
                    de cotation. Un formulaire entièrement dynamique pour vous
                    guider.
                  </p>
                </div>
              </div>
              <div className="box-item left">
                <span className="icon">
                  <i className="fas fa-car-side"></i>
                </span>
                <div className="text">
                  <h4>Location Voitures</h4>
                  <p>
                    On s’engage à vous offrir un service premium et une voiture
                    de location qui vous convient. Notre personnel hautement
                    qualifié fera tout pour satisfaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <div className="container" style={{ paddingTop: "3.5em" }}>
              <div className="section-header">
                <h2
                  className="section-title wow fadeIn text-left"
                  data-wow-duration="1000ms"
                  data-wow-delay="0.3s"
                >
                  Aucun <span>Projet</span> n’est trop Grand ou trop Petit
                </h2>
                <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
                <p
                  className="section-subtitle wow fadeIn"
                  data-wow-duration="1000ms"
                  data-wow-delay="0.3s"
                ></p>
              </div>

              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="text">
                    <p>
                      Oholiab Sarl est le fruit d’un dûr labeur d’un digne fils
                      du pays, qui n’a ni hérité d’un bien, ni des millions de
                      la part d’une quelconque personne, mais qui a forgé sa vie
                      par la peine, par la passion et par la rage de vaincre tel
                      est Monsieur Nzau Ngoma Camille qui incarne toute une
                      génération et qui est à la tête de Zénith Ressort de
                      Kinshasa sarl.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="text">
                    <p>
                      Dépuis 1983, le Groupe a joué un rôle majeur dans le
                      développement de l’infrastructure de l’Afrique. Nous
                      sommes experts dans plusieurs projets dont: <br /> –
                      Projets d’infrastructure majeurs et concessions <br /> –
                      Projets de partenariat publics et privés <br /> –
                      Transport
                      <br /> – Pétrole et ses Dérivéssonnel hautement qualifié
                      fera tout pour satisfaire.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 col-xs-12"></div>
                <div className="col-sm-4 col-xs-12">
                  <a
                    href="#contact"
                    className="btn btn-common wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="400ms"
                  >
                    <i className="fas fa-phone"></i> NOUS CONTACTER
                  </a>
                </div>
                <div className="col-sm-4 col-xs-12"></div>
              </div>
            </div>
          </div>

          {/*  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
            <div
              className="show-box wow fadeInDown animated"
              data-wow-offset="10"
            >
              <img src="/img/features/feature.jpg" alt="" />
            </div>
          </div>
           */}

          {/* <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div
              className="content-right text-left wow fadeInRight animated"
              data-wow-offset="10"
            >
              <div className="box-item right">
                <span className="icon">
                  <i className="lnr lnr-camera-video"></i>
                </span>
                <div className="text">
                  <h4>Video Background</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>
                </div>
              </div>
              <div className="box-item right">
                <span className="icon">
                  <i className="lnr lnr-magic-wand"></i>
                </span>
                <div className="text">
                  <h4>Parallax Sections</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="box-item right">
                <span className="icon">
                  <i className="lnr lnr-spell-check"></i>
                </span>
                <div className="text">
                  <h4>Ajax Contact Form</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
         */}
        </div>
      </div>
    </section>
  );
}
