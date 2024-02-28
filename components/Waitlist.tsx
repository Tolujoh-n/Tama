import React from "react";

const Join: React.FC = () => {
  return (
    <section
      style={{
        marginTop: "5%",
      }}
      id="join"
      className="join section-bg"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 style={{ color: "whitesmoke" }}>TAMA Data Marketplace</h4>
          </div>
        </div>
      </div>
      <div className="text-left">
        <a href="/" target="_blank" className="joinbut">
          Explore
        </a>
      </div>
      
    </section>
  );
};

export default Join;
