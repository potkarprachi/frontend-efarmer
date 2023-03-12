import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCrop } from "../../Service/ListApiService";
import { FarmerSideNav } from "../Layout/FarmerSideNav";
import FarmerSideNavBar from "../Layout/FarmerSideNavBar";

import "./AddCrop.css";

export function AddCrop() {
  const id = sessionStorage.getItem("userId");

  let [formData, setFormData] = useState({
    cropCategoryID: "",
    cropName: "",
    weight: "",
    price: "",
    farmerNo: {
      id: "",
    },
  });

  let [formAddCropError, setFormAddCropError] = useState("");
  let [formPriceError, setFormPriceError] = useState("");
  let [formWeightError, setFormWeightError] = useState("");
  var handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  var navigate = useNavigate();

  var handleSubmit = async (event) => {
    event.preventDefault();
    console.log(validate());
    if (!validate()) {
      console.log("Inside if");
      return;
    } else {
      formData.farmerNo.id = id;
      console.log("Inside else");
      await addCrop(id, formData);
      navigate("/cropStatusFarmer");
    }
  };

  const validate = () => {
    let isValid = true;
    // const regex=/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
    if (formData.cropName.trim() === "") {
      setFormAddCropError("*Crop name required");
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.cropName)) {
      setFormAddCropError("*Crop name can only contain letters");
      isValid = false;
    } else {
      setFormAddCropError("");
    }

    if (formData.price.trim() === "") {
      setFormPriceError("*Price of Crop required");
    } else if (!/^[1-9]\d{0,7}(?:\.\d{1,4})?|\.\d{1,4}$/.test(formData.price)) {
      setFormPriceError("*Enter Valid Price");
    } else {
      setFormPriceError("");
    }

    if (formData.weight.trim() === "") {
      setFormWeightError("*Weight of Crop required");
    } else if (!/(\d*\.?\d+)\s?(\w+)/.test(formData.weight)) {
      setFormWeightError("*Enter Valid weight");
    } else {
      setFormWeightError("");
    }

    return isValid;
  };

  return (
    <>
      <div className="addcropcss">
        <div className="row">
          <div className="col-lg-2 sidebar">
            <FarmerSideNav></FarmerSideNav>
          </div>
          <div className="col-lg-10">
            <div className="bgp1">
              <div classNameName="hg2">
                <div>
                  <h1 className="text-light fs-1 mt-5">
                    Sell Your Crops Here!!
                  </h1>
                </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-light">
                      <label
                        for="cropCategory"
                        className="form-label text-light"
                      >
                        Crop Category
                      </label>
                      <select
                        id="cropCategory"
                        name="cropCategoryID"
                        class="form-select"
                        aria-label="Default select example"
                        onChange={handleChange}
                      >
                        <option value="1">Vegetables</option>
                        <option value="2">Fruits</option>
                        <option value="3">Staples</option>
                      </select>
                      {/* <input
                type="text"
                className="form-control"
                id="cropCategory"
                placeholder="Enter the crop category"
              /> */}
                    </div>
                    <div className="mb-3">
                      <label for="cropName" className="form-label text-light">
                        Crop Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cropName"
                        placeholder="Enter the crop name"
                        name="cropName"
                        onChange={handleChange}
                      />
                      <span>
                        {formAddCropError && (
                          <span style={{ color: "red" }}>
                            {formAddCropError}{" "}
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="mb-3">
                      <label for="price" className="form-label text-light">
                        Price
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        placeholder="Enter the crop price"
                        onChange={handleChange}
                      />
                      <span>
                        {formPriceError && (
                          <span style={{ color: "red" }}>
                            {formPriceError}{" "}
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="mb-3">
                      <label for="weight" className="form-label text-light">
                        Weight
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="weight"
                        placeholder="Enter the crop weight"
                        name="weight"
                        onChange={handleChange}
                      />
                      <span>
                        {formWeightError && (
                          <span style={{ color: "red" }}>
                            {formWeightError}{" "}
                          </span>
                        )}
                      </span>
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*


  let [cropData, setcropData] = useState({
    name: "",
    category: "",
    price: "",
    weight: "",
  });

  var handleChange = (event) => {
    setcropData({ ...cropData, [event.target.name]: event.target.value });
  };

  var handleSubmit = async (event) => {
    event.preventDefault();

    console.log(cropData);
  };
<div classNameName="row">
          <div classNameName="col-lg-12 bgp1">
            <h1 classNameName="text-center fs-1 bold text-white">Add Crop</h1>
            <Form onSubmit={handleSubmit}>
              <label for="name">Name:</label>
              <br></br>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter Crop Name"
                onChange={handleChange}
              ></input>
              <br></br>
              <br></br>
              <label for="category">Category:</label>
              <br></br>
              <input
                id="category"
                type="text"
                name="category"
                placeholder="Enter Crop category"
                onChange={handleChange}
              ></input>
              <br></br>
              <br></br>
              <label for="category">Crop Name:</label>
              <br></br>
              <input
                id="category"
                type="text"
                name="category"
                placeholder="Enter Crop Name"
                onChange={handleChange}
              ></input>
              <br></br>
              <br></br>
              <label for="price">Price:</label>
              <br></br>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="Enter Crop price per Kg"
                onChange={handleChange}
              ></input>
              <br></br>
              <br></br>
              <label classNameName="label" for="weight">
                Weight:
              </label>
              <br></br>
              <input
                id="weight"
                type="number"
                name="weight"
                placeholder="Enter Crop weight in Kg"
                onChange={handleChange}
              ></input>
              <br></br>
              <br></br>
              <button classNameName="btn btn-primary" type="button">
                Add Crop
              </button>
            </Form>
          </div>
        </div>


*/

/* <div className="row">
    <div className="col-lg-2 sidebar">
               <FarmerSideNav></FarmerSideNav>
            </div>
    <div className="col-lg-10">
      <div className="bgp1">
      <div classNameName="hg2">
        <div>
          <h1 className="text-light fs-1 mt-5">Sell Your Crops Here!!</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-light">
              <label for="cropCategory" className="form-label text-light">
                Crop Category
              </label>
              <select id="cropCategory" name="cropCategoryID" class="form-select" aria-label="Default select example" onChange={handleChange}>
                <option value="1">Vegetables</option>
                <option value="2">Fruits</option>
                <option value="3">Staples</option>
              </select>
               <input
                type="text"
                className="form-control"
                id="cropCategory"
                placeholder="Enter the crop category"
              /> 
            </div>
            <div className="mb-3">
              <label for="cropName" className="form-label text-light">
                Crop Name
              </label>
              <input
                type="text"
                className="form-control"
                id="cropName"
                placeholder="Enter the crop name"
                name="cropName"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="price" className="form-label text-light">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                placeholder="Enter the crop price"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="weight" className="form-label text-light">
                Weight
              </label>
              <input
                type="text"
                className="form-control"
                id="weight"
                placeholder="Enter the crop weight"
                name="weight"
                onChange={handleChange}
              />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
            
          </form>
        </div>
        </div>
        </div>
        </div>
      </div> */
