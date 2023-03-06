import { useEffect, useState } from "react";
import { cancelCropSelling, getAllCropList } from "../../Service/ListApiService";
import { FarmerSideNav } from "../Layout/FarmerSideNav";

import "./FarmerCropStatus.css";
export function FarmerCropStatus() {
  let [cropList, setCropList] = useState([]);

  let id = sessionStorage.getItem("userId");

  async function getCropList(id) {
    var response = await getAllCropList(id);
    setCropList(response.data);
    console.log(response.data);
    console.log("Comparing Unsold" + response.data[0].status === "Unsold");
    console.log("Comparing Sold" + response.data[2].status === "Sold");
  }

  async function removeCropFromList(cropId1)
  {
    console.log(cropId1);
    var resonse=await cancelCropSelling(cropId1);
    getCropList(id);
  }

  useEffect(() => {
    getCropList(id);
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 sidebar">
          <FarmerSideNav></FarmerSideNav>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10">
          <div className="bgp1">
            <div className="container">
              <table className="table table-bordered mt-5 align-middle caption-top table-responsive">
                <caption className="text-center fs-1 bold text-white">
                  Crops Status
                </caption>
                <thead className="text-white">
                  <tr>
                    <th scope="col">Order No.</th>
                    <th scope="col">Crop</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price per Kg</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Sell Status</th>
                    <th scope="col">Cancel Order</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {cropList.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.cropID}</th>
                        <td>{item.cropName}</td>
                        <td>{item.weight}</td>
                        <td>{item.price}</td>
                        <td>{item.weight * item.price}</td>
                        <td>{item.status}</td>
                        {
                        item.customerid === 0 ? (
                          <td>Unsold</td>
                        ) : (
                          <td>Sold</td>
                        )}
                        {item.customerid === 0 ? (
                          <td>
                            <button
                              type="button"
                              class="btn btn-danger"
                              onClick={() => {
                                  removeCropFromList(item.cropID);
                              }
                            }
                            >
                              Cancel
                            </button>
                          </td>
                        ) : (
                          <td>
                            <button
                              type="button"
                              class="btn btn-warning"
                              disabled
                            >
                              Cancel
                            </button>
                          </td>
                        )
                        }
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
