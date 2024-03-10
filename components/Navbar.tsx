"use client";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Connectwallet from "./Connectwallet";
import Buy from "./Buy";

interface NavbarProps {
  isWalletConnected: boolean;
  walletAddress: string;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isWalletConnected,
  walletAddress,
  connectWallet,
  disconnectWallet,
}) => {
  const [activeLink, setActiveLink] = useState<string>("");
  const location = useLocation();
  const truncatedAddress = isWalletConnected
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : "";

  // Function to set the active link based on the current pathname
  const setActive = (pathname: string) => {
    setActiveLink(pathname);
  };

  // Effect to update active link when location changes
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // connect wallet modal
  const [isConnectwalletOpen, setIsConnectwalletOpen] = useState(false);

  const handleConnectwalletClick = () => {
    setIsConnectwalletOpen(true);
  };

  const handleCloseConnectwallet = () => {
    setIsConnectwalletOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // claim
    handleCloseConnectwallet();
  };

  // buy modal
  const [isBuyOpen, setIsBuyOpen] = useState(false);

  const handleBuyClick = () => {
    setIsBuyOpen(true);
  };

  const handleCloseBuy = () => {
    setIsBuyOpen(false);
  };

  const handleBuySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // claim
    handleCloseBuy();
  };

  return (
    <>
      <header id="header" className="d-flex align-items-center fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="/">
              TAMA<span>.</span>
            </a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link
                  to="/create"
                  className={`nav-link scrollto ${
                    activeLink === "/create" && "active"
                  }`}
                  onClick={() => setActive("/create")}
                >
                  create
                </Link>
              </li>
              <li>
                <Link
                  to="/stats"
                  className={`nav-link scrollto ${
                    activeLink === "/stats" && "active"
                  }`}
                  onClick={() => setActive("/stats")}
                >
                  Stats
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className={`nav-link scrollto ${
                    activeLink === "/dashboard" && "active"
                  }`}
                  onClick={() => setActive("/dashboard")}
                >
                  Dashboard
                </Link>
              </li>

              {isWalletConnected ? (
                <>
                  <li>
                    <a onClick={handleBuyClick} className="nav-link scrollto">
                      <i style={{ fontSize: "large" }} className="bi-cart"></i>
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={`nav-link scrollto ${
                        activeLink === "/oxede" && "active"
                      }`}
                      onClick={() => setActive("/oxede")}
                    >
                      {truncatedAddress}
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn btn-warning"
                      style={{
                        background: "rgb(255, 119, 0)",
                        color: "whitesmoke",
                      }}
                      onClick={disconnectWallet}
                    >
                      Disconnect
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    type="button"
                    onClick={handleConnectwalletClick}
                    className="btn btn-warning"
                    style={{ background: "deepskyblue", color: "whitesmoke" }}
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      {isConnectwalletOpen && (
        <Connectwallet onClose={handleCloseConnectwallet} />
      )}
      {isBuyOpen && <Buy onClose={handleCloseBuy} />}
    </>
  );
};

export default Navbar;
