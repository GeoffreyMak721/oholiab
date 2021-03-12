import React from "react";

export default function PricingTableSection() {
  return (
    <div id="pricing" className="section pricing-section">
      <div className="container">
        <div className="section-header">
          <h2
            className="section-title wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Pricing <span>Plans</span>
          </h2>
          <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
          <p
            className="section-subtitle wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy <br /> nibh euismod tincidunt ut laoreet dolore magna.
          </p>
        </div>

        <div className="row pricing-tables">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div
              className="pricing-table table-left wow fadeInLeft"
              data-wow-duration="1000ms"
              data-wow-delay="0.3s"
            >
              <div className="icon">
                <i className="lnr lnr-rocket"></i>
              </div>
              <div className="pricing-details">
                <h2>Starter Plan</h2>
                <span>Free</span>
                <ul>
                  <li>Consectetur adipiscing</li>
                  <li>Nunc luctus nulla et tellus</li>
                  <li>Suspendisse quis metus</li>
                  <li>Vestibul varius fermentum erat</li>
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-common">
                  Get Plan
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div
              className="pricing-table wow fadeInUp"
              data-wow-duration="1000ms"
              data-wow-delay="0.3s"
            >
              <div className="icon">
                <i className="lnr lnr-heart"></i>
              </div>
              <div className="pricing-details">
                <h2>Popular Plan</h2>
                <span>$3.99</span>
                <ul>
                  <li>Consectetur adipiscing</li>
                  <li>Nunc luctus nulla et tellus</li>
                  <li>Suspendisse quis metus</li>
                  <li>Vestibul varius fermentum erat</li>
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-common">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div
              className="pricing-table table-left wow fadeInRight"
              data-wow-duration="1000ms"
              data-wow-delay="0.3s"
            >
              <div className="icon">
                <i className="lnr lnr-magic-wand"></i>
              </div>
              <div className="pricing-details">
                <h2>Premium Plan</h2>
                <span>$9.50</span>
                <ul>
                  <li>Consectetur adipiscing</li>
                  <li>Nunc luctus nulla et tellus</li>
                  <li>Suspendisse quis metus</li>
                  <li>Vestibul varius fermentum erat</li>
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-common">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
