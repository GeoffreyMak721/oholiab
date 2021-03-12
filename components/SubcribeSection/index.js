import React from "react";

export default function SubcribeSection() {
  return (
    <div id="subscribe" className="section">
      <div className="container">
        <div className="section-header">
          <h2
            className="section-title wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Souscrire <span> aux newsletter</span>
          </h2>
          <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
          <p
            className="section-subtitle wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Souscrivez pour avoir toute les dernieres nouvelle sur nous.
          </p>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <form
              className="text-center form-inline wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <input
                className="mb-20 form-control"
                name="email"
                placeholder="Votre Addresse Email"
              />
              <button className="sub_btn">souscrire</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
