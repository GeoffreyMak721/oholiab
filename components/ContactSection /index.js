import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="row justify-content-md-center">
          <div
            className="col-md-9 wow fadeInDown"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            <div className="contact-block">
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
        </div>
      </div>
    </section>
  );
}
