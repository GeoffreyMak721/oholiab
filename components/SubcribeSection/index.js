import React from "react";

export default function SubcribeSection() {
  return (
    <div id="subscribe" className="section">
      <div className="container contact-form">
        <div className="row justify-content-between">
          <div className="col-lg-5 col-md-12 col-xs-12">
            <div className="subscribe-form">
              <div className="form-wrapper">
                <div className="sub-title text-center">
                  <h3>Nous Contacter</h3>
                  <p>Ecrivez-nous pour plus d'informations</p>
                </div>
                <form>
                  <div className="row">
                    <div className="col-12 form-line">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="Nom"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 form-line">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Télephone"
                        />
                      </div>
                    </div>
                    <div className="col-12 form-line">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12 form-line">
                      <div className="form-group">
                        <textarea
                          row="8"
                          className="form-control"
                          name="message"
                          placeholder="message"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-submit">
                        <button
                          type="submit"
                          className="btn btn-common btn-effect"
                        >
                          Envoyer
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contact-deatils subscribe-form">
              <div className="contact-info_area form-wrapper">
                <div className="contact-info">
                  <i className="lni-map"></i>
                  <h5>Lieu</h5>
                  <p>Immeuble CTC/16 ème niveau</p>
                </div>

                <div className="contact-info">
                  <i className="lni-star"></i>
                  <h5>E-mail</h5>
                  <p>info@oholiab-sarl.com</p>
                </div>

                <div className="contact-info">
                  <i className="lni-phone"></i>
                  <h5>Télephone</h5>
                  <p>+243 80 888 008 4</p>
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
                  {/* <li>
                    <a className="google-plus" href="#">
                      <i className="lni-google-plus"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
