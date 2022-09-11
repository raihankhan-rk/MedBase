import React from "react";
import Data from "../data.json";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import User from "../user.png";
import NavBar from "./MedNav.jsx"

export default function Dashboard() {
  return (
    <section>
      {<NavBar/>}
      <div className="container">
        <h1 className="heading_dashboard fw-bold mb-4 text-center">
          Dashboard
        </h1>
        <div className="row justify-content-center align-items-center position-float">
          <div className="dash-card ridge">
            <div className="d-flex flex-col justify-content-between">
              <h1>Test User</h1>
              <img src={User} className="user rounded flex" alt="user" />
            </div>
            <h4 className="my-4">UID: XXXX-XXXX-XXXX</h4>
            <h4 className="my-3">Phone: +91 9876543210</h4>
          </div>
        </div>
        <div
          className="tableBox"
          style={{
            height: "40px",
            borderRadius: "15px 15px 0px 0px",
            background: "#f8f9fa",
          }}
        ></div>

        <div className="tab mb-3">
          <table className="table table-hover table-responsive table-light rounded-2">
            <thead>
              <tr>
                <th colSpan="4">
                  <h6 className="text-center">Upload Documents</h6>
                  <div className="d-flex bd-highlight">
                    <Form.Group controlId="formFile" className="flex-grow-1">
                      <Form.Control type="file"/>
                    </Form.Group>
                    <Button variant="primary" className="upload_button mr-5 ml-2">Upload</Button>{" "}
                  </div>
                  <h6 className="text-center">. . .</h6>
                </th> 
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>
                  Id.
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  File Name
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Uploaded On
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {Data.map((data) => {
                return (
                  <tr>
                    <th scope="row" style={{ textAlign: "center" }}>
                      {data.id}
                    </th>
                    <td style={{ textAlign: "center" }}>{data.title}</td>
                    <td
                      className="small text-muted"
                      style={{ textAlign: "center" }}
                    >
                      {data.date}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <a rel="noreferrer" target="_blank" href={data.url}>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary justify-content-right"
                        >
                          View
                        </button>
                      </a>
                      <a
                        href={data.url + "?filename=filename.png&download=true"}
                      >
                        <button
                          type="button"
                          className="btn mx-lg-4 btn-success btn-sm"
                        >
                          Download
                        </button>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
