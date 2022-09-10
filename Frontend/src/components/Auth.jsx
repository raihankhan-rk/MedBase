import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Auth(props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form shadow-lg p-3 my-5 bg-white rounded">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Phone Number</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Enter phone number"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Link to="/otp">
                <button type="submit" className="btn btn-primary mb-2">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form shadow-lg p-3 my-5 bg-white rounded">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>

          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Your Name"
            />
          </div>

          <div className="form-group mt-3">
            <label>Age</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Your Age"
            />
          </div>

          <div class="form-group mt-3">
            <label for="exampleFormControlSelect1">Gender</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Male</option>
              <option>Female</option>
              <option>Rishav</option>
              <option>Others</option>
              <option>Prefer Not to Say</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Your Phone number"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Your Password"
            />
          </div>

          <div className="d-grid gap-2 mt-3 pb-3">
            <Link to="/otp">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
