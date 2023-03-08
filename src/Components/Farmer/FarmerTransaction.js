import { useEffect, useState } from "react";
import { getTransDetails, getTransDetailsFarmer } from "../../Service/ListApiService";
import { FarmerSideNav } from "../Layout/FarmerSideNav";

import './Transcationpage.css';


export function FarmerTransaction() {
    let [transactions,setTransactions]=useState([]);
    const id=sessionStorage.getItem("userId");
    async function getTransList(id)
    {
        console.log(id);
        var response= await getTransDetailsFarmer(id);
        console.log(response.data);
        setTransactions(response.data);
    }

    useEffect(()=>{
        getTransList(id);
    },[]);
    return (
      <>

      <div className="row ">
            <div className="col-lg-2 sidebar">
               <FarmerSideNav></FarmerSideNav>
            </div>
            <div className="col-lg-10">
        <div className="" >

          <table className="table table-striped table-bordered table-responsive">
            <thead>
              <tr>
                <th scope="col">Transaction ID</th>
                <th scope="col">Customer Id</th>
                <th scope="col">Crop ID</th>
                <th scope="col">Weight</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
                {transactions.map((item)=>{
                    return(
                        <tr>
                            <td>{item.transactionId}</td>

                            <td>{item.customerid}</td>
                            <td>{item.cropID}</td>
                            <td>{item.weight}</td>
                            <td>{item.date}</td>
                            <td>{item.status}</td>
                        </tr>
                    );
                })}
            </tbody>
          </table>
        </div>
        </div>
        </div>
      </>
    );
  }
  