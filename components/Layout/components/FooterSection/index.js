import React from "react";

export default function inFooterSection() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="social-icons wow fadeInDown"
              data-wow-duration="1000ms"
              data-wow-delay="0.3s"
            >
              <ul>
                <li className="facebook">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="twitter">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li className="linkedin">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="site-info wow fadeInUp"
              data-wow-duration="1000ms"
              data-wow-delay="0.3s"
            >
              <p>
                Tous droits réservés &copy; 2021 - Oholiab Sarl - Developé par{" "}
                <a rel="nofollow" href="https://mbokart-concept.net">
                  Mbok'art Concept
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
