import React, { useEffect, useState } from "react";
import { buyCrop1, getApprovedList } from "../../Service/ListApiService";
import "../Customer/MenuPage.css"
import CustomerSideNav from "../Layout/CustomerSideNav";

export function MenuPage() {
  let [listOfCrops, setListOfCrops] = useState([]);
  const customerId=sessionStorage.getItem("userId");
  let [trans,setTrans]=useState({
    cropID : '',
    customerNo: {
          id: 1
      },
      farmerNo: {
        id: ''
    },
    cropStatus:{
      cropID : ''
    },
    price:'',
    weight:'',
    status:'Paid'
  }
  );
  async function getList() {
    var response = await getApprovedList();
    setListOfCrops(response.data);
    console.log(response.data);
  }
  async function buyCrop(customerId,item)
  {
    trans.cropID=item.cropID;
    trans.customerNo.id=parseInt(customerId,10);
    trans.farmerNo.id=item.farmerNo.id;
    trans.price=item.price;
    trans.weight=item.weight;
    trans.cropStatus.cropID=item.cropID
    var response1=await buyCrop1(trans);
    getList();
  }
  useEffect(() => {
    getList();
  }, []);
  return (
    <>
    <div className="row">
    <div className="col-lg-2 sidebar">
               <CustomerSideNav></CustomerSideNav>
            </div>
    <div className="col-lg-10 menu1">
    <div class="bg-for-menupage">
        <div class="container my-5 bg-for-menupage">
            <div class="row">
            {listOfCrops.map((item) => {
              return (
                <div className="col-3 my-3 mx-5 menupage">
                  <div className="card text-center" style={{width: "18rem"}}>
                    <div className="card-header">Farmer Name : {item.farmerNo.fullname}</div>
                    <div className="card-body">
                      <h5 class="card-title">Crop Name : {item.cropName}</h5>
                      <p className="card-text text-start">Weight : {item.weight}</p>
                      <p class="card-text text-start">Price : {item.price}</p>
                      <p class="card-text text-start">City : {item.farmerNo.districts.district}</p>
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => {
                            buyCrop(customerId,item);
                        }}
                      >
                        Buy
                      </button>
                    </div>
                    <div class="card-footer text-muted">
                      Total Price : {item.weight * item.price}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

// "cropID": 1,
//         "farmerId": 1,
//         "cropName": "Rice",
//         "cropCategoryID": 25,
//         "weight": 1000.0,
//         "status": "Accepted",
//         "price": 300.0,
//         "customerid": 20

/*<div class="bg-for-menupage">
        <div class="container my-5 bg-for-menupage">
          <div class="row">
            {listOfCrops.map((item) => {
              return (
                <div className="col-sm-3 my-3 menupage">
                  <div className="card text-center" style={{width: "18rem"}}>
                    <div className="card-header">Farmer Name : {item.farmerId}</div>
                    <div className="card-body">
                      <h5 class="card-title">Crop Name : {item.cropName}</h5>
                      <p className="card-text text-start">Weight : {item.weight}</p>
                      <p class="card-text text-start">Price : {item.price}</p>
                      <p class="card-text text-start">City : {item.city}</p>
                      <a href="#" class="btn btn-success">
                        Buy
                      </a>
                    </div>
                    <div class="card-footer text-muted">
                      Total Price : {item.weight * item.price}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>*/