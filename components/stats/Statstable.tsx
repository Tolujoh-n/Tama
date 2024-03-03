import React from "react";
import img from "../assets/img/apple-touch-icon.png";
import coin from "../assets/img/inj.png";
import ninja from "../assets/img/ninja.webp";
import toxic from "../assets/img/toxic.webp";
import pepes from "../assets/img/pepe.webp";
import rugberbs from "../assets/img/rugberbs.webp";
import Image from "next/image";

const tableData = [
  {
    collection: "The Ninjas",
    collectionimg: ninja,
    avaliablepool: 20.4,
    offerstaken: "0 of 10 offers taken",
    bestoffer: 12,
    interest: 0.56,
    interestrate: "3.49% interest",
    apy: 60,
    status: "Active",
  },
  {
    collection: "Toxic Aliens",
    collectionimg: toxic,
    avaliablepool: 25.43,
    offerstaken: "0 of 10 offers taken",
    bestoffer: 12,
    interest: 0.56,
    interestrate: "3.49% interest",
    apy: 60,
    status: "Closed",
  },
  {
    collection: "Injective Pepes",
    collectionimg: pepes,
    avaliablepool: 33.4,
    offerstaken: "0 of 4 offers taken",
    bestoffer: 12,
    interest: 0.56,
    interestrate: "1.49% interest",
    apy: 50,
    status: "Active",
  },
  {
    collection: "The Rugberbs",
    collectionimg: rugberbs,
    avaliablepool: 30.4,
    offerstaken: "4 of 50 offers taken",
    bestoffer: 12,
    interest: 0.56,
    interestrate: "2.49% interest",
    apy: 60,
    status: "Closed",
  },
];

const Statstable: React.FC = () => {
  return (
    <div style={{ overflowX: "auto" }} className="col-12">
      <table style={{ width: "100%" }} className="responsive-table">
        <thead>
          <tr className="table-header">
            <th className="col col-1">Collection</th>
            <th className="col col-2 text-center">Nft</th>
            <th className="col col-3">Offer</th>
            <th className="col col-3">Interest</th>
            <th className="col col-5">APY</th>
            <th className="col col-6">Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="table-row">
              <td
                className="col col-1"
                data-label="Job Id"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Image
                  src={row.collectionimg}
                  alt="Product"
                  id="tableimg"
                  style={{
                    marginRight: "10px",
                    maxWidth: "50px",
                    borderRadius: "10px",
                  }}
                />
                <div style={{ flexGrow: 1 }}>
                  <h5
                    style={{
                      textDecoration: "none",
                      display: "inline-block",

                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {row.collection}
                  </h5>
                </div>
              </td>

              <td className="col col-2" data-label="Customer Name">
                <div className="text-center">
                  <h5>
                    {row.avaliablepool}{" "}
                    <span>
                      <Image
                        src={coin}
                        className="coin-table-image"
                        alt="coin"
                      />
                    </span>
                  </h5>
                  <span>{row.offerstaken}</span>
                </div>
              </td>
              <td className="col col-3" data-label="Amount">
                <h5>
                  {row.bestoffer}{" "}
                  <span>
                    <Image src={coin} className="coin-table-image" alt="coin" />
                  </span>
                </h5>
              </td>
              <td className="col col-3" data-label="Amount">
                <h5>
                  {row.interest}{" "}
                  <span>
                    <Image src={coin} className="coin-table-image" alt="coin" />
                  </span>
                </h5>
                <span>{row.interestrate}</span>
              </td>

              <td className="col col-5" data-label="Job Ids">
                <h5>{row.apy}%</h5>
              </td>
              <td className="col col-6" data-label="Job Id">
                <h5>{row.status}</h5>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Statstable;
