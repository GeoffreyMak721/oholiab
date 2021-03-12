import React from "react";

export default function TestimonialSection() {
  return (
    <div id="testimonial" className="section">
      <div className="container">
        <div className="section-header">
          <h2
            className="section-title wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Témoignages de <span>clients</span>
          </h2>
          <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
          <p
            className="section-subtitle wow fadeInDown"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          ></p>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-10 wow fadeInRight" data-wow-delay="0.2s">
            <div className="touch-slider owl-carousel owl-theme">
              <div className="testimonial-item">
                <img src="/img/testimonial/star.png" alt="Client Testimonoal" />
                <div className="testimonial-text">
                  <p>
                    “Au cours des dernières années, la technologie a grandement
                    <br />
                    évolué la manière de travailler et Zenith Ressort de
                    Kinshasa <br /> vous accompagne en ce sens. Le transport
                    international <br />
                    devient un jeu d’enfants. ”
                  </p>
                  <h3>- NZAU NGOMA CAMILLE -</h3>
                  <span>CEO, Zenith Ressort</span>
                </div>
              </div>
              <div className="testimonial-item">
                <img src="/img/testimonial/star.png" alt="Client Testimonoal" />
                <div className="testimonial-text">
                  <p>
                    “J’ai eu la chance d’utiliser votre service de location de
                    <br />
                    voiture et j’ai été surpris par l’accueil. Le personnel est
                    <br />
                    vraiment professionnel. Pour ma part vous mériter 5 étoiles.
                    <br />
                    Car vous nous facilitez la vie”
                  </p>
                  <h3>- GAYAKA SANDRO -</h3>
                  <span>Administrateur, PIXALOT</span>
                </div>
              </div>
              <div className="testimonial-item">
                <img src="/img/testimonial/star.png" alt="Client Testimonoal" />
                <div className="testimonial-text">
                  <p>
                    “La technologie nous a grandement servi dans son ensemble et
                    <br />
                    aussi à améliorer de façon considérable notre niveau de vie.
                    <br />
                    J’aime bien l’interface du simple, facile à utiliser. Je
                    <br />
                    conseille à tout le monde de l’utiliser”
                  </p>
                  <h3>- YAKABWE MBO GABI -</h3>
                  <span>CEO, Golden Mountain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
