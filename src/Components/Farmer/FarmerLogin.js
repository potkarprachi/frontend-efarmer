import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../Service/ListApiService";
import "../Login.css";
function FarmerLogin() {
  const userrole = "farmer";
  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  var handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };
  var navigate = useNavigate();
  var handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      console.log("no validate")
      return;
    }
    else {
      var response = await userLogin(loginData);
      
      if (response.data.email ===loginData.email && response.data.password===loginData.password) {

        sessionStorage.setItem("user", JSON.stringify(response.data.email));
        sessionStorage.setItem("userId", JSON.stringify(response.data.id));
        sessionStorage.setItem("role", JSON.stringify("farmer"));
        navigate('/farmerdashboard');
      }
      else {
        alert("Invalid Credentials");
        navigate('/farmerlogin')
      }
    }
  };
  const validate = () => {
    let isValid = true;
    if (loginData.email.trim() === '') {
      console.log('inside email validation')
      setEmailError('Email is required');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
      setEmailError('Email is not valid');
      isValid = false;
    } else {
      setEmailError('');
    }

    // password validation
    if (loginData.password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    } else if (loginData.password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }
    return isValid
  };
  useEffect(() => {
  }, [])

  return (
    <div className="lg">
      <form action="" method="post" onSubmit={handleSubmit}>
        <div>
          <label for="username">Email Id:</label>
          <input type="text"
            id="email"
            name="email"
            placeholder="Email Id"
            value={loginData.email}
            onChange={handleChange}
          />{emailError && <span style={{ color: "red" }}>{emailError} </span>}
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Password"
          />{passwordError && <span style={{ color: "red" }}>{passwordError} </span>}
        </div>
        <br />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="./Signup"> Signup </a>
        </p>
      </form>
    </div>
  );
}

export default FarmerLogin;
