import React from "react";

export default function FooterSection() {
  return (
    <footer>
      <section className="footer-Content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <h3>Oholiab</h3>
              <div className="textwidget">
                <p>
                  OHOLIAB au cœur de l’Afrique, rayonne et impacte l’ensemble du
                  monde par le rayonnement des ses activités sans cesses
                  croissantes et un panel des sociétés partenaires.
                </p>
              </div>
              <ul className="footer-social">
                <li>
                  <a className="facebook" href="#">
                    <i className="lni-facebook-filled"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="lni-twitter-filled"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="lni-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a className="google-plus" href="#">
                    <i className="lni-google-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Liens</h3>
                <ul className="menu">
                  <li>
                    <a href="#">Accueil</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Choix</a>
                  </li>
                  <li>
                    <a href="#">Approvisionnement</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">CONTACT</h3>
                <ul className="contact-footer">
                  <li>
                    <strong>Address :</strong>
                    {"  "}
                    <span>Immeuble CTC/16 ème niveau</span>
                  </li>
                  <li>
                    <strong>Télephone :</strong>
                    {"  "}
                    <span>+243 80 888 008 4</span>
                  </li>
                  <li>
                    <strong>E-mail :</strong>
                    {"  "}
                    <span>
                      <a href="#">info@oholiab-sarl.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Instagram</h3>
                <ul className="instagram-footer">
                  <li>
                    <a href="#">
                      <img src="img/portfolio/img-1.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/portfolio/img-3.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/portfolio/img-4.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/instagram/img-5.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/instagram/img-6.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/instagram/img-7.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-info float-left">
                <p>
                  Tous droits réservés © 2021 | Developé par{" "}
                  <a href="https://mbokart-concept.net" rel="nofollow">
                    Mbok'art Concept
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
