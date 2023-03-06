import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../Service/ListApiService";

import "../Login.css";
function AdminLogin() {
  const userrole="admin";
  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  var handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };
  var navigate=useNavigate();
  var handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()){
      console.log("no validate")  
      return;
      }
    else
    {
    var response = await userLogin(loginData);
    console.log(response);
    if(response.data==true)
    {   
        
        sessionStorage.setItem("user", JSON.stringify(loginData.email));
        sessionStorage.setItem("userID", JSON.stringify(loginData.id)); //check
        sessionStorage.setItem("role", JSON.stringify("admin"));
        navigate('/transaction');
    }
    else
    {
        alert("Invalid Credentials");
        navigate('/farmerlogin')
    }
  }
  }; 
  const validate = () =>
  {
    let isValid=true;
    if (loginData.email.trim() === '') 
     {  
      console.log('inside email validation')
      setEmailError('Email is required');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) 
    { 
      setEmailError('Email is not valid');
      isValid = false;
    } else 
    {
      setEmailError('');
    }

    // password validation
    if (loginData.password.trim() === '') 
    {
      setPasswordError('Password is required');
      isValid = false;
    } else if (loginData.password.length < 8) 
    {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    } else 
    {
      setPasswordError('');
    }
    return isValid
  } ;
  useEffect(()=>
  {
  },[])
 
  return (
    <div className="lg">
      <form action="" method="post" onSubmit={handleSubmit}>
      <div>
        <label for="username">Email Id:</label>
        <input type="text" 
        id="email" 
        name="email" 
        value={loginData.email}
        onChange={handleChange}
        placeholder="Email Id"
        />{emailError && <span style={{ color: "red" }}>{emailError} </span>}
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" 
        id="password" 
        name="password"
        placeholder="Password"
        value={loginData.password} 
        onChange={handleChange}
        />{passwordError && <span style={{ color: "red" }}>{passwordError} </span>}
      </div>
        <br />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="./Signup"> Signup </a>
        </p>
      </form>
    </div>
    // hii
  );
}

export default AdminLogin;
