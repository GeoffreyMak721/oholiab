import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="row ">
          <div
            className="col-lg-8 col-xs-12 wow fadeInDown"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            <div className="contact-block my-2">
              <div className="section-header">
                <h2
                  className="section-title wow fadeIn"
                  data-wow-duration="1000ms"
                  data-wow-delay="0.3s"
                >
                  Nous <span>contacter</span>
                </h2>
                <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
              </div>
              <form id="contactForm">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Votre Nom"
                        required
                        data-error="Entrez votre nom"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Votre Email"
                        id="email"
                        className="form-control"
                        name="name"
                        required
                        data-error="Entrez votre email"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Sujet"
                        id="msg_subject"
                        className="form-control"
                        required
                        data-error="Entrez le sujet"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Votre Message"
                        rows="11"
                        data-error="Ecrivez votre message"
                        required
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="submit-button text-center">
                      <button
                        className="btn btn-common"
                        id="submit"
                        type="submit"
                      >
                        Envoyer
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            className="col-lg-4 col-xs-12 wow fadeInDown"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            <div className="contact-block my-2">
              <div className="contact_info">
                <div className="contact_title mt-30">
                  <h5 className="title">COORDONÉES</h5>
                </div>
                <p></p>

                <div className="single_info d-flex">
                  <div className="info_icon">
                    <i className="far fa-map"></i>
                  </div>
                  <div className="info_content media-body">
                    <p>Immeuble CTC/16 ème niveau</p>
                  </div>
                </div>
                <div className="single_info d-flex">
                  <div className="info_icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info_content media-body">
                    <p>+243 80 888 008 4</p>
                    <p></p>
                  </div>
                </div>
                <div className="single_info d-flex">
                  <div className="info_icon">
                    <i className="fas fa-envelope-open-text"></i>
                  </div>
                  <div className="info_content media-body">
                    <p>info@oholiab-sarl.com</p>
                    <p></p>
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
