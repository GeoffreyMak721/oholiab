import React from "react";

export default function CounterSection() {
  return (
    <div className="counters section bg-defult">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="facts-item">
              <div className="icon">
                <i className="lni-rocket"></i>
              </div>
              <div className="fact-count">
                <h3>
                  <span className="counter">36</span>
                </h3>
                <h4>Années Établies</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="facts-item">
              <div className="icon">
                <i className="lni-coffee-cup"></i>
              </div>
              <div className="fact-count">
                <h3>
                  <span className="counter">256</span>
                </h3>
                <h4>Projets Achevés</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="facts-item">
              <div className="icon">
                <i className="lni-user"></i>
              </div>
              <div className="fact-count">
                <h3>
                  <span className="counter">845</span>+
                </h3>
                <h4>Clients Active</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="facts-item">
              <div className="icon">
                <i className="lni-heart"></i>
              </div>
              <div className="fact-count">
                <h3>
                  <span className="counter">1189</span>
                </h3>
                <h4>Personnes Nous Aimes</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
