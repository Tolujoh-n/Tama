import React from "react";
import junk1 from "../../assets/img/junk1.png";
import junk2 from "../../assets/img/junk2.png";
import junk3 from "../../assets/img/junk3.png";
import junk4 from "../../assets/img/junk4.png";
import Image from "next/image";

const Providerdata = () => {
  const items = [
    {
      image: junk1,
      lastsale: "Last Sale: 0.242 ETH",
      price: "0.242 ETH",
      title: "TinFun #6129",
      profile: "Sooshio",
      highestbid: "4.5 ETH",
    },
    {
      image: junk2,
      lastsale: "Last Sale: 0.242 ETH",
      price: "0.242 ETH",
      title: "TinFun #6129",
      profile: "Sooshio",
      highestbid: "6.5 ETH",
    },
    {
      image: junk3,
      lastsale: "Last Sale: 0.242 ETH",
      price: "0.242 ETH",
      title: "TinFun #6129",
      profile: "Sooshio",
      highestbid: "7.2 ETH",
    },
    {
      image: junk4,
      lastsale: "Last Sale: 0.242 ETH",
      price: "0.242 ETH",
      title: "TinFun #6129",
      profile: "Sooshio",
      highestbid: "12.0 ETH",
    },
    {
      image: junk2,
      lastsale: "Last Sale: 0.242 ETH",
      price: "0.242 ETH",
      title: "TinFun #6129",
      profile: "moans",
      highestbid: "6.3 ETH",
    },
    {
      image: junk4,
      lastsale: "Last Sale: 0.242 ETH",
      price: "0.242 ETH",
      title: "TinFun #6129",
      profile: "Sooshio",
      highestbid: "12.0 ETH",
    },
    {
      image: junk2,
      lastsale: "Last Sale: 0.242 ETH",
      price: "0.242 ETH",
      title: "TinFun #6129",
      profile: "moans",
      highestbid: "6.3 ETH",
    },
    {
      image: junk4,
      lastsale: "Last Sale: 0.242 ETH",
      price: "0.242 ETH",
      title: "TinFun #6129",
      profile: "gooad",
      highestbid: "3.5 ETH",
    },
  ];

  return (
    <section id="nftcollections" className="nftcollections">
      <div className="container">
        <div className="text-left">
          <span className="nfth">All</span>
          <span className="nfth">Art</span>
          <span className="nfth">Gaming</span>
          <span className="nfth">Memberships</span>
          <span className="nfth">PFPs</span>
          <span className="nfth">Photography</span>
          <span className="nfth">Music</span>
        </div>
        <br />
        <div className="col-12">
          <h2 style={{ color: "whitesmoke" }}>CeatorName collections</h2>
        </div>
        <br></br>
        <div className="mynftsec">
          <div className="row icon-boxes">
            {items.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 d-flex align-items-stretch"
              >
                <div className="card">
                  <a href="/details">
                    <Image
                      src={item.image}
                      className="card-img-top"
                      alt="..."
                    />
                  </a>

                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="/details">{item.title}</a>
                    </h5>
                  </div>

                  <div className="price-container">
                    <span className="price left">
                      <span style={{ color: "gray" }}>{item.price}</span>
                      <br></br>
                      <span style={{ color: "white" }} id="pricetag">
                        {item.lastsale}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Providerdata;
