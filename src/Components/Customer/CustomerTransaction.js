import { useEffect, useState } from "react";
import { getTransDetails } from "../../Service/ListApiService";
import CustomerSideNav from "../Layout/CustomerSideNav";
import '../Customer/CustomerTransactions.css'
export function CustomerTransaction() {
  let [transactions, setTransactions] = useState([]);

  var id = sessionStorage.getItem("userId");

  async function getTransList(id) {
    console.log(id);
    var response = await getTransDetails(id);
    console.log(response.data);
    setTransactions(response.data);
  }

  useEffect(() => {
    getTransList(id);
  }, []);
  return (
    <>
      <div className="row ">
            <div className="col-lg-2 sidebar">
               <CustomerSideNav></CustomerSideNav>
            </div>
            <div className="col-lg-10 ">
        <div className="bgp1" >
          <div>
            <h1 className="my-3">Transactions History</h1>
          </div>
          <table className="table table-bordered table-responsive text-light">
            <thead>
              <tr>
                <th scope="col">Transaction ID</th>
                <th scope="col">Customer</th>
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
