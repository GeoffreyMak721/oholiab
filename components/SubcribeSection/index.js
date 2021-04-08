import React, { useState } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";

export default function SubcribeSection() {
  const [succes, setSucces] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmitForm(data) {
    let config = {
      method: "post",
      url: `/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    try {
      setLoading(true);
      const response = await axios(config);

      if (response.status == 200) {
        reset();
        setSucces(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

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
                <form onSubmit={handleSubmit(onSubmitForm)}>
                  <div className="row">
                    <div className="col-12 form-line">
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.name && "is-invalid"
                          }`}
                          name="name"
                          placeholder="Nom"
                          {...register("name", {
                            required: true,
                            minLength: 3,
                          })}
                        />
                        <div className="invalid-feedback error-msg">
                          Nom incorrect !
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 form-line">
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.phone && "is-invalid"
                          }`}
                          name="phone"
                          placeholder="Télephone"
                          {...register("phone")}
                        />
                        <div className="invalid-feedback error-msg">
                          Téléphone incorrect !
                        </div>
                      </div>
                    </div>
                    <div className="col-12 form-line">
                      <div className="form-group">
                        <input
                          type="email"
                          className={`form-control ${
                            errors.email && "is-invalid"
                          }`}
                          name="email"
                          placeholder="Email"
                          {...register("email", {
                            required: true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          })}
                        />
                        <div className="invalid-feedback error-msg">
                          Email incorrect !
                        </div>
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="form-group">
                        <textarea
                          row="8"
                          className={`form-control ${
                            errors.message && "is-invalid"
                          }`}
                          name="message"
                          placeholder="message"
                          name="message"
                          {...register("message", {
                            required: true,
                          })}
                        />
                        <div className="invalid-feedback error-msg">
                          Message incorrect !
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-submit">
                        <button
                          type="submit"
                          className="btn btn-common btn-effect"
                          disabled={loading}
                        >
                          Envoyer
                        </button>
                      </div>
                    </div>
                    <div className="col-12">
                      {succes && (
                        <div
                          className=" mt-3 alert alert-success alert-dismissible fade show"
                          role="alert"
                        >
                          <strong>Merci!</strong> nous avons reçu votre message.
                          <button
                            type="button"
                            class="close"
                            data-dismiss="alert"
                            aria-label="Close"
                            onClick={() => setSucces(false)}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      )}
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
