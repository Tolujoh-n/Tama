import React, { useState } from "react";
import ninja from "../assets/img/ninja.webp";
import ninja1 from "../assets/img/junk1.png";
import ninja2 from "../assets/img/junk2.png";
import coin from "../assets/img/inj.png";
import Image from "next/image";

interface BuyProps {
  onClose: () => void;
}

const buyData = [
  {
    itemname: "The Ninjas",
    itemimg: ninja,
    price: 20.4,
  },
  {
    itemname: "Toxic Aliens",
    itemimg: ninja1,
    price: 25.43,
  },
  {
    itemname: "Injective Pepes",
    itemimg: ninja2,
    price: 33.4,
  },
];

const Buy: React.FC<BuyProps> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Close the modal
    onClose();
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content" style={modalContentStyle}>
        <span
          style={{ cursor: "pointer", textAlign: "right" }}
          className="close"
          onClick={onClose}
        >
          &times;
        </span>

        <div className="maincard">
          {buyData.map((item, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid deepskyblue",
                paddingBottom: "5px",
              }}
              className="d-flex align-items-center"
            >
              <div className="">
                <Image
                  src={item.itemimg}
                  style={{
                    height: "80px",
                    width: "80px",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
              </div>
              <div className="ps-3">
                <h5 className="c" style={{ color: "whitesmoke" }}>
                  <b>{item.itemname} </b>
                </h5>
                <p style={{ color: "whitesmoke" }}>Price: {item.price}ETH</p>
              </div>
            </div>
          ))}
          <div>
            <p style={{ color: "whitesmoke" }}>Total: 2.33ETH</p>
          </div>

          <div className="text-center">
            <button
              style={cancelbut}
              type="button"
              className="button-style"
              onClick={onClose}
            >
              Cancel
            </button>
            <button style={submitbut} type="submit" className="button-style">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;

// Inline CSS styles for the modal #2a2927
const header: React.CSSProperties = {
  textAlign: "center",
  color: "whitesmoke",
};

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

const cancelbut: React.CSSProperties = {
  padding: "8px 12px",
  backgroundColor: "rgb(129, 128, 125)",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "10px",
  marginRight: "8px",
};

const submitbut: React.CSSProperties = {
  padding: "8px 12px",
  backgroundColor: "rgb(255, 119, 0)",
  color: "black",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "10px",
  marginRight: "8px",
};
