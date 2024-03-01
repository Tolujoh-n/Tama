import React, { useState, useEffect } from "react";
import metamask from "../assets/img/metamask.png";
import keplr from "../assets/img/keplr.jpg";
import leap from "../assets/img/leap.png";
import Image from "next/image";

interface ConnectwalletModalProps {
  onClose: () => void;
  onConnect: (address: string, walletType: string) => void;
}

const Connectwallet: React.FC = () => {
  // const Connectwallet: React.FC = ({ onClose }) => {
  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content" style={modalContentStyle}>
        <span
          style={{ cursor: "pointer", textAlign: "right" }}
          className="close"
        >
          &times;
        </span>

        <div className="maincard">
          <div
            className="d-flex align-items-center"
            style={{
              background: "gray",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <div className="">
              <Image
                src={keplr}
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "10px",
                }}
                alt=""
              />
            </div>

            <div className="ps-3">
              <h5 className="c" style={{ color: "whitesmoke" }}>
                <b>KEPLR </b>
              </h5>
              <p>Connect to keplr</p>
            </div>
          </div>
          <br></br>
          <div
            className="d-flex align-items-center"
            style={{
              background: "gray",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <div className="">
              <Image
                src={leap}
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "10px",
                }}
                alt=""
              />
            </div>

            <div className="ps-3">
              <h5 className="c" style={{ color: "whitesmoke" }}>
                <b>LEAP </b>
              </h5>
              <p>Connect to leap</p>
            </div>
          </div>
          <br></br>
          <div
            className="d-flex align-items-center"
            style={{
              background: "gray",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <div className="">
              <Image
                src={metamask}
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "10px",
                }}
                alt=""
              />
            </div>

            <div className="ps-3">
              <h5 className="c" style={{ color: "whitesmoke" }}>
                <b>METAMASK </b>
              </h5>
              <p>Connect to Metamask</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connectwallet;

const modalStyle: React.CSSProperties = {
  display: "block",
  position: "fixed",
  zIndex: 9999,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
};

const modalContentStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "400px",
  background: "#171717",
  border: "1px solid gray",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  margin: "0 10px",
};
