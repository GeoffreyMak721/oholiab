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
                  <i className="lnr lnr-magic-wand"></i>
                </div>
                <div className="fact-count">
                  <h3>
                    <span className="counter">100</span>%
                  </h3>
                  <h4>Faster</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="wow fadeInUp" data-wow-delay=".4s">
              <div className="facts-item">
                <div className="icon">
                  <i className="lnr lnr-coffee-cup"></i>
                </div>
                <div className="fact-count">
                  <h3>
                    <span className="counter">700</span>
                  </h3>
                  <h4>Cup of Coffee</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="wow fadeInUp" data-wow-delay=".6s">
              <div className="facts-item">
                <div className="icon">
                  <i className="lnr lnr-user"></i>
                </div>
                <div className="fact-count">
                  <h3>
                    <span className="counter">10000</span>+
                  </h3>
                  <h4>Active Clients</h4>
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
                    <span className="counter">1689</span>
                  </h3>
                  <h4>Peoples Love</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
