import React from "react";

export default function TestimonialSection() {
  return (
    <section className="testimonial section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">TÉMOIGNAGES DE CLIENTS</h2>
          <span>TÉMOIGNAGES</span>
          <p className="section-subtitle">
            Toutes les critiques que nous publions sont écrites par des clients
            réels, <br />
            ce qui en fait un excellent moyen de savoir à quoi vous attendre au
            comptoir.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div id="testimonials" className="touch-slider owl-carousel">
              <div className="item">
                <div className="testimonial-item">
                  <div className="author">
                    <div className="img-thumb">
                      <img src="img/testimonial/img1.jpg" alt="" />
                    </div>

                    <div className="author-info">
                      <h2>
                        <a href="#">- FRANCIS MPANGULA GAYAKA</a>
                      </h2>
                      <span>CEO, Oholiab sarl</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <p className="description">
                      “Au cours des dernières années, la technologie a
                      grandement évolué la manière de travailler et Zenith
                      Ressort de Kinshasa vous accompagne en ce sens. Le
                      transport international devient un jeu d’enfants. ”
                    </p>
                    <span>
                      <i className="lni-star-filled"></i>
                    </span>
                    <span>
                      <i className="lni-star-filled"></i>
                    </span>
                    <span>
                      <i className="lni-star-filled"></i>
                    </span>
                    <span>
                      <i className="lni-star"></i>
                    </span>
                    <span>
                      <i className="lni-star"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="author">
                    <div className="img-thumb">
                      <img src="img/testimonial/img2.jpg" alt="" />
                    </div>
                    <div className="author-info">
                      <h2>
                        <a href="#">GAYAKA SANDRO</a>
                      </h2>
                      <span>Administrateur, PIXALOT</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <p className="description">
                      “J’ai eu la chance d’utiliser votre service de location de
                      voiture et j’ai été surpris par l’accueil. Le personnel
                      est vraiment professionnel. Pour ma part vous mériter 5
                      étoiles. Car vous nous facilitez la vie”
                    </p>
                    <span>
                      <i className="lni-star-filled"></i>
                    </span>
                    <span>
                      <i className="lni-star-filled"></i>
                    </span>
                    <span>
                      <i className="lni-star-filled"></i>
                    </span>
                    <span>
                      <i className="lni-star-filled"></i>
                    </span>
                    <span>
                      <i className="lni-star-filled"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="author">
                    <div className="img-thumb">
                      <img src="img/testimonial/img3.jpg" alt="" />
                    </div>
                    <div className="author-info">
                      <h2>
                        <a href="#">- YAKABWE MBO GABI</a>
                      </h2>
                      <span>CEO, Golden Mountain</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <p className="description">
                      “La technologie nous a grandement servi dans son ensemble
                      et aussi à améliorer de façon considérable notre niveau de
                      vie. J’aime bien l’interface du simple, facile à utiliser.
                      Je conseille à tout le monde de l’utiliser”
                    </p>
                    <span>
                      <i className="lni-star-filled"></i>
                    </span>
                    <span>
                      <i className="lni-star-filled"></i>
                    </span>
                    <span>
                      <i className="lni-star-filled"></i>
                    </span>
                    <span>
                      <i className="lni-star-filled"></i>
                    </span>
                    <span>
                      <i className="lni-star"></i>
                    </span>
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
