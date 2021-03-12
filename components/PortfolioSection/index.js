import React from "react";

export default function PortfolioSection() {
  return (
    <section id="portfolios" className="section">
      <div className="container">
        <div className="section-header">
          <h2
            className="section-title wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Nos <span>Réalisations</span>
          </h2>
          <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
          <p
            className="section-subtitle wow fadeInDown"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Fournie de solutions intégrées dans les secteurs du bâtiment, <br />
            du pétrole et ses dérivés de l’infrastructure et de l’ingénierie
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* <div
              className="controls text-center wow fadeInUp"
              data-wow-delay=".6s"
            >
              <a
                className="control mixitup-control-active btn btn-common"
                data-filter="all"
              >
                All
              </a>
              <a className="control btn btn-common" data-filter=".marketing">
                Design
              </a>
              <a className="control btn btn-common" data-filter=".planning">
                Development
              </a>
              <a className="control btn btn-common" data-filter=".research">
                Print
              </a>
            </div>

 */}
            <div
              id="portfolio"
              className="row wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix marketing planning">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <a className="overlay lightbox" href="/img/portfolio/1.jpg">
                      <img src="/img/portfolio/1.jpg" alt="" />
                      <i className="lnr lnr-plus-circle item-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix planning">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <a className="overlay lightbox" href="/img/portfolio/2.jpg">
                      <img src="/img/portfolio/2.jpg" alt="" />
                      <i className="lnr lnr-plus-circle item-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix research">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <a className="overlay lightbox" href="/img/portfolio/3.png">
                      <img src="/img/portfolio/3.png" alt="" />
                      <i className="lnr lnr-plus-circle item-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix marketing research">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <a className="overlay lightbox" href="/img/portfolio/4.png">
                      <img src="/img/portfolio/4.png" alt="" />
                      <i className="lnr lnr-plus-circle item-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix marketing planning">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <a
                      className="overlay lightbox"
                      href="/img/portfolio/5.jpeg"
                    >
                      <img src="/img/portfolio/5.jpeg" alt="" />
                      <i className="lnr lnr-plus-circle item-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix planning research">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <a
                      className="overlay lightbox"
                      href="/img/portfolio/6.jpeg"
                    >
                      <img src="/img/portfolio/6.jpeg" alt="" />
                      <i className="lnr lnr-plus-circle item-icon"></i>
                    </a>
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
