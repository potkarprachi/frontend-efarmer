import { useEffect, useState } from "react";
import { cancelCropSelling, changeStatusAxios, getAllCropList, getAllPendingList } from "../../Service/ListApiService";
import AdminSideNav from "../Layout/AdminSideNav";
import { FarmerSideNav } from "../Layout/FarmerSideNav";

import "./CropVerification.css";
export function AdminCropStatus() {
  let [cropList, setCropList] = useState([]);

  let id = sessionStorage.getItem("userId");

  async function getCropList() {
    var response = await getAllPendingList();
    setCropList(response.data);
    console.log(response.data);
  }

  async function changeStatus(cropsId,status)
  {
    console.log(status);
    console.log("hiiii");
    var resonse=await changeStatusAxios(cropsId,status);
    console.log("byeee");
    getCropList();
  }

  useEffect(() => {
    getCropList();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 sidebar">
          <AdminSideNav></AdminSideNav>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10">
          <div className="bgp1">
            <div className="container">
              <table className="table table-bordered mt-5 align-middle caption-top table-responsive">
                <caption className="text-center fs-1 bold text-white">
                  Admin Crops Status
                </caption>
                <thead className="text-white">
                  <tr>
                    <th scope="col">Order No.</th>
                    <th scope="col">Farmer</th>
                    <th scope="col">Crop</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price per Kg</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {cropList.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.cropID}</th>
                        <td>{item.farmerId}</td>
                        <td>{item.cropName}</td>
                        <td>{item.weight}</td>
                        <td>{item.price}</td>
                        <td>{item.weight * item.price}</td>
                        <td>{item.status}</td>
                        <td>
                          <button type="button" class="btn btn-success btn-sm me-2" onClick={()=>{changeStatus(item.cropID,"Accepted")}}>Accept</button>
                          <button type="button" class="btn btn-danger btn-sm" onClick={()=>{changeStatus(item.cropID,"Rejected")}}>Reject</button></td>
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
