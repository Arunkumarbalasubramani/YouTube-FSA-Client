import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { GoogleIcon } from "./exports";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { signInFunction } from "./actions";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

const SignIn = ({ loggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    const data = { email: email, password: password };
    console.log(data);
    // e.preventDefault();
    // dispatch(loginStart());
    // try {
    //   const res = await axios.post(
    //     `https://youtube-server-app.onrender.com/signin`,
    //     { email, password }
    //   );
    //   dispatch(loginSuccess(res.data));
    //   // loggedIn(res.data);
    //   navigate("/");
    // } catch (error) {
    //   dispatch(loginFailure(error));
    //   console.log(error);
    // }
  };
  return (
    <div className="sign-in-container">
      <div className="sign-in-card">
        <div className="head">
          <GoogleIcon className="google-icon" />
          <h3 className="page-title">Sign In</h3>
          <p>To continue to YouTube</p>
        </div>
        <form className=" sign-in-form">
          <div className="input-div">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-input"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="input-div">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="text-input"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button variant="outlined" onClick={handleLogin}>
            Sign In
          </Button>
        </form>
        <div className="addnl-actions">
          <Nav.Link>
            <h6 className="sign-up-link"> Forgot Password?</h6>
          </Nav.Link>
          <h6>Do'nt Have an Account</h6>
          <div className="sign-up">
            <Nav.Link
              className="sign-up-link"
              onClick={() => navigate("/signup")}
            >
              {" "}
              <h6 className="sign-up-link"> Sign Up</h6>
            </Nav.Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
