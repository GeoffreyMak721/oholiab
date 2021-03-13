import React from "react";

export default function CounterSection() {
  return (
    <div className="counters section" data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="facts-item">
                <div className="icon">
                  <i className="lnr lnr-calendar-full" />
                </div>
                <div className="fact-count">
                  <h3>
                    <span className="counter">36</span>
                  </h3>
                  <h4>Années Établies</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="wow fadeInUp" data-wow-delay=".4s">
              <div className="facts-item">
                <div className="icon">
                  <i className="lnr lnr-license" />
                </div>
                <div className="fact-count">
                  <h3>
                    <span className="counter">250</span>
                  </h3>
                  <h4>Projets Achevés</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="wow fadeInUp" data-wow-delay=".6s">
              <div className="facts-item">
                <div className="icon">
                  <i className="lnr lnr-user" />
                </div>
                <div className="fact-count">
                  <h3>
                    <span className="counter">1000</span>+
                  </h3>
                  <h4>Clients Active</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="wow fadeInUp" data-wow-delay=".8s">
              <div className="facts-item">
                <div className="icon">
                  <i className="lnr lnr-heart"></i>
                </div>
                <div className="fact-count">
                  <h3>
                    <span className="counter">237</span>
                  </h3>
                  <h4>Personnes Nous Aimes</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
