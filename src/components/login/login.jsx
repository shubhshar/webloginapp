import React from "react";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  return (
    <div className="login">
      {console.log("user", user)}
      <h1>Login </h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleOnchange}
        placeholder="Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Password"
        onChange={handleOnchange}
      ></input>
      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
};

export default Login;
