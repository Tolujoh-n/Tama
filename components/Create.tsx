"use client";
import React, { useState } from "react";

const Create: React.FC = () => {
  const [productDetails, setProductDetails] = useState({
    title: "",
    storeId: "",
    image: "",
    Creator: "",
    Price: "",
    File: "",
    description: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <section id="nftcollections" className="nftcollections">
      <div className="container">
        <h2 style={{ color: "white" }}>Sell Data Form</h2>
        <div className="col-xl-12">
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="form-group">
                    <label style={{ color: "whitesmoke" }} htmlFor="title">
                      Data Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter Data Title"
                      value={productDetails.title}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          title: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ color: "whitesmoke" }} htmlFor="Price">
                      Data Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="Price"
                      placeholder="Enter Data price"
                      value={productDetails.Price}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          Price: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label style={{ color: "whitesmoke" }} htmlFor="Creator">
                      Data Creator
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Creator"
                      placeholder="Creator Name"
                      value={productDetails.Creator}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          Creator: e.target.value,
                        })
                      }
                      required
                      // readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ color: "whitesmoke" }} htmlFor="image">
                      Data Thumbnail
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="file"
                      placeholder="Enter Data Image"
                      value={productDetails.File}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          File: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label
                      style={{ color: "whitesmoke" }}
                      htmlFor="description"
                    >
                      Data Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ height: "40px" }}
                      id="description"
                      placeholder="Enter Data Description"
                      value={productDetails.description}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="text-center">
                  <a href="/" className="joinbut">
                    Create
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
