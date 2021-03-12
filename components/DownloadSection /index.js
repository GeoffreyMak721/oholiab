import React from "react";

export default function DownloadSection() {
  return (
    <section id="download" className="section">
      <div className="container">
        <div className="section-header">
          <h2
            className="section-title wow fadeInDown"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            <span>Download</span> Our App
          </h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              className="download-area text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a href="#" className="btn btn-border">
                <i className="fa fa-apple"></i>Download Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
