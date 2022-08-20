import React from "react";
import "./register.css";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <div className="register">
      {console.log("user", user)}
      <h1>Register </h1>
      <input
        type="text"
        name="name"
        values={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        values={user.email}
        placeholder="Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        values={user.password}
        placeholder="Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterpassword"
        values="user.reEnterpassword"
        placeholder="Re-Enter Password"
        onChange={handleChange}
      ></input>
      <div className="button">Register</div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  );
};

export default Register;
