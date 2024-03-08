"use client";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Connectwallet from "./Connectwallet";
import Buy from "./Buy";

const Header: React.FC = () => {
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
                <a href="/create" className="nav-link scrollto">
                  Create
                </a>
              </li>

              <li>
                <a href="/stats" className="nav-link scrollto">
                  Stats
                </a>
              </li>

              <li>
                <a href="/dashboard" className="nav-link scrollto">
                  Dashboard
                </a>
              </li>
              <li>
                <a onClick={handleBuyClick} className="nav-link scrollto">
                  <i style={{ fontSize: "large" }} className="bi-cart"></i>
                </a>
              </li>

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

export default Header;
