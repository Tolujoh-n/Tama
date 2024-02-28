import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>
                Tama<span>.</span>
              </h3>
              {/* <p>
                <strong>Email:</strong> inj@mail.com
                <br />
              </p> */}
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a rel="noreferrer" href="/">
                    Home
                  </a>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a rel="noreferrer" href="/">
                    community
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <div className="social-links mt-3">
                <a
                  rel="noreferrer"
                  href="/"
                  target="_blank"
                  className="twitter"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                {/* <a  rel="noreferrer" href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a  rel="noreferrer" href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a  rel="noreferrer" href="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a>
                <a  rel="noreferrer" href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container py-4"
        style={{ borderTop: "1px solid deepskyblue" }}
      >
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Tama</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
