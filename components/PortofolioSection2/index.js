import React from "react";

import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section id="portfolios" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Terminaux d’approvisionnement </h2>
          <span>Terminaux</span>
          <p className="section-subtitle">
            L’afrique, l’Europe,l’Asie,l’Amérique et le Monde sont nos zones des
            prédilections pour nous approvisionner en produits pétroliers finis.
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="controls text-center">
              <a
                className="filter active btn btn-common btn-effect"
                data-filter="all"
              >
                All
              </a>
              <a
                className="filter btn btn-common btn-effect"
                data-filter=".design"
              >
                Design
              </a>
              <a
                className="filter btn btn-common btn-effect"
                data-filter=".development"
              >
                Development
              </a>
              <a
                className="filter btn btn-common btn-effect"
                data-filter=".print"
              >
                Print
              </a>
            </div>
          </div>
        </div>

        <div id="portfolio" className="row">
          <div className="col-lg-4 col-md-6 col-xs-12 mix development print">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src="img/portfolio/img-1.jpg" alt="" />
                <div className="single-content">
                  <div className="fancy-table">
                    <div className="table-cell">
                      <div className="zoom-icon">
                        <a className="lightbox" href="img/portfolio/img-1.jpg">
                          <i className="lni-zoom-in item-icon"></i>
                        </a>
                      </div>
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mix design print">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src="img/portfolio/img-2.jpg" alt="" />
                <div className="single-content">
                  <div className="fancy-table">
                    <div className="table-cell">
                      <div className="zoom-icon">
                        <a className="lightbox" href="img/portfolio/img-2.jpg">
                          <i className="lni-zoom-in item-icon"></i>
                        </a>
                      </div>
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mix development">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src="img/portfolio/img-3.jpg" alt="" />
                <div className="single-content">
                  <div className="fancy-table">
                    <div className="table-cell">
                      <div className="zoom-icon">
                        <a className="lightbox" href="img/portfolio/img-3.jpg">
                          <i className="lni-zoom-in item-icon"></i>
                        </a>
                      </div>
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mix development design">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src="img/portfolio/img-4.jpg" alt="" />
                <div className="single-content">
                  <div className="fancy-table">
                    <div className="table-cell">
                      <div className="zoom-icon">
                        <a className="lightbox" href="img/portfolio/img-4.jpg">
                          <i className="lni-zoom-in item-icon"></i>
                        </a>
                      </div>
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mix development">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src="img/portfolio/img-5.jpg" alt="" />
                <div className="single-content">
                  <div className="fancy-table">
                    <div className="table-cell">
                      <div className="zoom-icon">
                        <a className="lightbox" href="img/portfolio/img-5.jpg">
                          <i className="lni-zoom-in item-icon"></i>
                        </a>
                      </div>
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 mix print design">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src="img/portfolio/img-6.jpg" alt="" />
                <div className="single-content">
                  <div className="fancy-table">
                    <div className="table-cell">
                      <div className="zoom-icon">
                        <a className="lightbox" href="img/portfolio/img-6.jpg">
                          <i className="lni-zoom-in item-icon"></i>
                        </a>
                      </div>
                      <a href="#">View Project</a>
                    </div>
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
