import React, { useState, useEffect } from "react";
import ninja from "../assets/img/metamask.png";
import coin from "../assets/img/inj.png";
import Image from "next/image";
import web3 from "./web3";

interface ConnectwalletModalProps {
  onClose: () => void;
  onConnect: (address: string, walletType: string) => void;
}

interface ConnectwalletProps {
  onClose: () => void;
}

const Connectwallet: React.FC<ConnectwalletProps> = ({ onClose }) => {
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (web3.currentProvider) {
        try {
          await (web3.currentProvider as any).request({
            method: "eth_requestAccounts",
          });

          const accounts: string[] = await web3.eth.getAccounts();
          const isConnected: boolean = accounts.length > 0;

          setIsWalletConnected(isConnected);
          setWalletAddress(accounts[0]);
        } catch (error) {
          console.error("Failed to connect the wallet:", error);
        }
      }
    };

    checkWalletConnection();
  }, []);

  const connectWallet = () => {
    if (web3.currentProvider) {
      (web3.currentProvider as any)
        .request({ method: "eth_requestAccounts" })
        .then((accounts: string[]) => {
          setIsWalletConnected(true);
          setWalletAddress(accounts[0]);
        })
        .catch((error: Error) => {
          console.log(error);
        });
    } else {
      window.open("https://metamask.io/download.html", "_blank");
    }
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
    setWalletAddress("");
  };

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
          <div
            className="d-flex align-items-center"
            style={{
              background: "gray",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={connectWallet}
          >
            <div className="">
              <Image
                src={ninja}
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
          <br />
        </div>
      </div>
    </div>
  );
};

export default Connectwallet;

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
