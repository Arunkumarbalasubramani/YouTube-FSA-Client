import React from "react";
import { Nav } from "react-bootstrap";
import { GoogleIcon } from "./exports";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
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
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="userName"
              id="userName"
              className="text-input"
              placeholder="Enter User Name"
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
            />
          </div>
          <Button variant="outlined">Sign In</Button>
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
