import React from "react";
import joinimg from "../../assets/img/partabout.png";
import boxImage2 from "../../assets/img/partabout.png";
import Image from "next/image";

const Description = () => {
  return (
    <>
      <section id="nftdetails" className="nftdetails">
        <div className="container">
          <div id="aboutmore" className="row">
            <div className="col-lg-6 col-md-6 order-1 order-lg-1 content">
              <div className="headpare">
                <h5>Created By</h5>

                <p className="description">
                  <Image src={joinimg} id="collectionprofile" alt="..." />{" "}
                  <span id="pricetag">Shoosi pank</span>
                </p>
              </div>
              <br></br>
              <div className="headpare">
                <h5>Description</h5>

                <p>
                  The Experience spinner at shooshi as been a very whdg djwgdil
                  lwig gy gwyg yelfyegf vce lasihg sgy ouys godfuyg douys dy
                  suyd ousyfd oyuso du sd ofuf
                </p>
              </div>
              <br />
              <div className="headpare">
                <h5>Datails</h5>

                <p className="description">
                  <i className="bi bi-person"></i>{" "}
                  <span id="pricetag">Owner is ....</span>
                </p>
                <p className="description">
                  <i className="bi bi-bag"></i>{" "}
                  <span id="pricetag">Url is ...</span>
                </p>
                <p className="description">
                  <i className="bi bi-cart"></i>{" "}
                  <span id="pricetag">Provider is ..</span>
                </p>
                <p className="description">
                  <i className="bi bi-basket"></i>{" "}
                  <span id="pricetag">Supply is ......</span>
                </p>
              </div>
              <br />
              <div className="headpare">
                <h5>Tags</h5>

                <p className="description">
                  <span id="pricetag">Shoshi</span>
                </p>
                <p className="description">
                  <span id="pricetag">Resturant</span>
                </p>
                <p className="description">
                  <span id="pricetag">Shoosh</span>
                </p>
                <p className="description">
                  <span id="pricetag">Hokushi</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pt-4 pt-lg-0 order-2 order-lg-2 content">
              <h3>00 : 00 : 00</h3>

              <div className="card">
                <Image src={joinimg} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h5 className="card-title">
                    <a href="">gedhge</a>
                  </h5>
                  <p className="description">
                    <Image src={joinimg} id="collectionprofile" alt="..." />{" "}
                    <span id="pricetag">bkbef</span>
                  </p>
                </div>
                <div className="price-container">
                  <span className="price left">
                    <span style={{ color: "gray" }}>Daily Price</span>
                    <br></br>
                    <span id="pricetag">2.46 USDT</span>
                  </span>
                  <span className="price right">
                    <span style={{ color: "gray" }}>Montly Price</span>{" "}
                    <br></br>
                    <span id="pricetag">4.76 USDT</span>
                  </span>
                </div>
              </div>
              <a id="provbut" class="full-width-button">
                BUY
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Description;
