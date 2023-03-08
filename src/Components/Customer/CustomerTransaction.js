import { useEffect, useState } from "react";
import { getTransDetails } from "../../Service/ListApiService";
import CustomerSideNav from "../Layout/CustomerSideNav";

export function CustomerTransaction() {
    let [transactions,setTransactions]=useState([]);
    var id=sessionStorage.getItem("userId");
    async function getTransList(id)
    {
        console.log(id);
        var response= await getTransDetails(id);
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
               <CustomerSideNav></CustomerSideNav>
            </div>
            <div className="col-lg-10">
        <div classNameName="container-fluid">
          <table className="table table-striped table-bordered table-responsive">
            <thead>
              <tr>
                <th scope="col">Transaction ID</th>
                <th scope="col">Farmer Id </th>
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
                            <td>{item.farmerId}</td>
                            <td>{item.cropId}</td>
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
  