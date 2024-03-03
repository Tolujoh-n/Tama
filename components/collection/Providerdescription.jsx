import React from "react";
import joinimg from "../../assets/img/junk4.png";
import boxImage2 from "../../assets/img/junk4.png";
import Image from "next/image";

const Description = () => {
  return (
    <>
      <section id="nftdetails" className="nftdetails">
        <div className="container">
          <div id="aboutmore" className="row">
            <h1 id="provhead" style={{ color: "deepskyblue" }}>
              Creator Name
            </h1>
            <div className="col-lg-6 col-md-6 order-2 order-lg-1 content">
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <div className="card-body">
                      <h5 className="card-title">9,767 ETH</h5>
                      <p className="card-text">Total Volume</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card-body">
                      <h5 className="card-title">0.242 ETH</h5>
                      <p className="card-text">Floor Price</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card-body">
                      <h5 className="card-title">0.2083 WETH</h5>
                      <p className="card-text">Best Offer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pt-4 pt-lg-0 order-1 order-lg-2 content">
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <div className="card-body">
                      <h5 className="card-title">4%</h5>
                      <p className="card-text">Listed</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card-body">
                      <h5 className="card-title">3,991 (40%)</h5>
                      <p className="card-text">Owners (Unique)</p>
                    </div>
                  </div>
                  {/* <div className="providerbut">
                    <div className="col-lg-6 col-md-6">
                      <a href="#" id="provbut" class="full-width-button">
                        <span class="bi-clipboard"></span>
                        Oxajs...dhbbs3
                      </a>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <a href="#" id="provfolbut" class="full-width-button">
                        <span class="bi-plus"></span>
                        Follow
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 order-1 order-lg-1 content">
            <br></br>
            <div className="headpare">
              <h5>BIO</h5>

              <p>
                The Experience spinner at shooshi as been a very whdg djwgdil
                lwig gy gwyg yelfyegf vce lasihg sgy ouys godfuyg douys dy suyd
                ousyfd oyuso du sd ofuf
              </p>
            </div>
            <br></br>
            <div className="headpare">
              <h5>Links</h5>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Description;
