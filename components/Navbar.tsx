import React from "react";

const Header: React.FC = () => {
  return (
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
              <a href="/" className="nav-link scrollto">
                Create
              </a>
            </li>

            <li>
              <a href="/loans" className="nav-link scrollto">
                Stats
              </a>
            </li>

            <li>
              <a href="/dashboard" className="nav-link scrollto">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/" className="nav-link scrollto">
                <i style={{ fontSize: "large" }} className="bi-cart"></i>
              </a>
            </li>

            <li>
              <button
                type="button"
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
  );
};

export default Header;
