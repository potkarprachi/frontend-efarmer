
import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccDetails } from '../../Service/ListApiService';
import { FarmerSideNav } from '../Layout/FarmerSideNav';
import './FarDashBoard.css';

export function FarDashboard()
{   
    const id=sessionStorage.getItem("userId");
    const[accDetails,setAccDetails]=useState([]);
    var navigate= useNavigate();
    
    async function getAccountDetails(id)
    {
    var response=await getAccDetails(id);
    setAccDetails(response.data);
    console.log(response.data);
    console.log(accDetails.fullname);
    
    }

    async function updateDetails()
    {
        navigate(`/accountupdate/`);
    
    }
    useEffect(() => {
        getAccountDetails(id);
      },[])
    return(
    <div className="row ">
            <div className="col-lg-2 sidebar">
               <FarmerSideNav></FarmerSideNav>
            </div>
            <div className="col-lg-10">
            <div className="page bgp1">
            <div className="container">
                <br></br>
            <h3>Welcome,{accDetails.fullname}</h3>
            
            <table class="table tablerr col-md-9">
                <tbody>
                    <tr>
                    <th className="table-text-heading col-md-6">Name</th>
                    <td className="table-text col-md-3">{accDetails.fullname}</td>
                    </tr>
                    <tr>
                    <th  className="table-text-heading">Phone</th>
                    <td className="table-text">{accDetails.phone}</td>
                    </tr>
                    <tr>
                    <th className="table-text-heading">Email</th>
                    <td className="table-text">{accDetails.email}</td>
                    </tr>
                    <tr>
                    <th className="table-text-heading">Aadhar Card </th>
                    <td className="table-text">{accDetails.adhar}</td>
                    </tr>
                    <tr>
                    <th className="table-text-heading">District</th>
                    <td className="table-text">{accDetails.district}</td>
                    </tr>
                    <tr>
                    <th className="table-text-heading">City</th>
                    <td className="table-text">{accDetails.city}</td>
                    </tr>
                    <tr>
                    <th className="table-text-heading">Pin code</th>
                    <td className="table-text">{accDetails.pincode}</td>
                    </tr>
                </tbody>
                </table>
                <button type="button" onClick={(e)=>{
                        // e.persist();
                        updateDetails();
                        }} class="btn btn-primary">Update</button>
                </div>
            </div>
            </div>
            
    </div>
    )
}
