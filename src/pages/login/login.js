import axios from "axios";
import React, { useState } from "react";
import "./logIn.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/users/login", {
      email: user,
      password: pass,
    });
    console.log(res.data);
    localStorage.setItem("token", res.data.token);
    navigate("../dashboard");
  };
  return (
    <>
      <h1 className="loginh1">Log In</h1>
      <div className=" container">
        <form className="form">
          <div class="ccontainer">
            <label for="email">
              <b>E-mail</b>
            </label>
            <input
              className="text"
              type="email"
              placeholder="Enter E-mail"
              onChange={(e) => setUser(e.target.value)}
              required
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              className="pass"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={(e) => setPass(e.target.value)}
            />

            <button className="loginbtn" type="submit" onClick={login}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
