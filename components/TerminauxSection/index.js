import React from "react";

export default function AboutSection() {
  return (
    <section className="featured-bg section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Terminaux d’approvisionnement</h2>
          <span>Terminaux</span>
          <p className="section-subtitle">
            L’afrique, l’Europe,l’Asie,l’Amérique et le Monde sont nos zones des
            prédilections pour nous approvisionner en produits pétroliers finis.
          </p>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xs-12">
            <img className="img-fluid" src="img/about/img2.png" alt="" />
          </div>
          <div className="col-md-12 col-lg-6 col-xs-12">
            <img className="img-fluid" src="img/about/img2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
