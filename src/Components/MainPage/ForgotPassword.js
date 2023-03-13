import { red } from "@mui/material/colors";
import React, { useState } from "react";
import { forgotPasswordEmail } from "../../Service/ForgotPasswordEmail";
import { forgotPassword } from "../../Service/ListApiService";

function ForgotPassword() {
  const [email, setEmail] = useState();

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const pwd = generateString(8);
    console.log(pwd);

    console.log(email);
    const response = await forgotPassword(email, pwd);
    console.log(response.data);
    forgotPasswordEmail(response.data.fullname, response.data.email, pwd);
  };
  return (
    <div>
      Enter Email:
      <input id="email" name="email" type="text" onChange={handleEmail}></input>
      <button onClick={handleSubmit}>Send Link</button>
    </div>
  );
}

export default ForgotPassword;
