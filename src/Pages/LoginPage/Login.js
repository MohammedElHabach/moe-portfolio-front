import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Outlet, useNavigate } from "react-router-dom";
const Login = () => {
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const navigate = useNavigate()

  const loginURL = process.env.REACT_APP_URL+"/admin/login"
  const notify = () => toast.success("Logged in successfully");


  const sendRequest = async () => {
    try{
      const res = await axios
      .post(loginURL, {
        email: email,
        password: pass,
      })
      const data = await res.data;
      localStorage.setItem("token", data.token);
      notify();
      navigate("/dashboard/admin")

    }
    catch(err){
      toast.error(err.response.data.message)
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();

  }
  return (
    <>
    <div className="bk-color">
      <div className="center">
        <form onSubmit={handleSubmit}>
            <h1 className="login_dash">Login</h1>
          <div className="txt_field">
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              required
            />
            <span></span>
            <label>Admin Email</label>
          </div>

          <div className="txt_field">
            <input
              onChange={(e)=>setPass(e.target.value)}
              value={pass}
              type="password"
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
      <Outlet/>
    </div>
    </>
  );
};

export default Login;
