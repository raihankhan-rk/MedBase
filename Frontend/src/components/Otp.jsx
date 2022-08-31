import React from "react";
import { Link } from "react-router-dom";

export default function Otp() {

  return (
    <div className="Auth-form-container">
      <form className="Auth-form shadow-lg p-3 mb-5 bg-white rounded">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">OTP</h3>
          <div className="form-group mt-3">
            <label>Type your OTP here</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter OTP"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Link to="/dashboard">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Link>
            <label className="text fw-light timer">Time Remaining: 1:23 </label>
          </div>
          <p className="text-center mt-2">
            <a href="/otp">Resend OTP?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
