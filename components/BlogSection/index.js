import React from "react";

export default function BlogSection() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="section-header">
          <h2
            className="section-title wow fadeIn"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Latest <span>Blogs</span>
          </h2>
          <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
          <p
            className="section-subtitle wow fadeInDown"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy <br /> nibh euismod tincidunt ut laoreet dolore magna.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item">
            <div
              className="blog-item-wrapper wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="blog-item-img">
                <a href="single-post.html">
                  <img src="/img/blog/img1.jpg" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a href="#">How often should you tweet?</a>
                </h3>
                <div className="meta-tags">
                  <span className="date">
                    <i className="lnr lnr-calendar-full"></i>on Mar 23, 2018
                  </span>
                  <span className="comments">
                    <a href="#">
                      <i className="lnr lnr-bubble"></i> 24 Comments
                    </a>
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua...
                </p>
                <a href="single-post.html" className="btn btn-common btn-rm">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item">
            <div
              className="blog-item-wrapper wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="blog-item-img">
                <a href="single-post.html">
                  <img src="/img/blog/img2.jpg" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a href="#">Content is still king</a>
                </h3>
                <div className="meta-tags">
                  <span className="date">
                    <i className="lnr lnr-calendar-full"></i>on Mar 29, 2018
                  </span>
                  <span className="comments">
                    <a href="#">
                      <i className="lnr lnr-bubble"></i> 24 Comments
                    </a>
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua...
                </p>
                <a href="single-post.html" className="btn btn-common btn-rm">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item">
            <div
              className="blog-item-wrapper wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="blog-item-img">
                <a href="single-post.html">
                  <img src="/img/blog/img3.jpg" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <h3>
                  <a href="#">Social media at work</a>
                </h3>
                <div className="meta-tags">
                  <span className="date">
                    <i className="lnr lnr-calendar-full"></i>on Mar 21, 2018
                  </span>
                  <span className="comments">
                    <a href="#">
                      <i className="lnr lnr-bubble"></i> 24 Comments
                    </a>
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua...
                </p>
                <a href="single-post.html" className="btn btn-common btn-rm">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
