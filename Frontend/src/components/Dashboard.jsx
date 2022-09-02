import React from "react";
import Data from "../data.json";

export default function Dashboard() {
  return (
      <section>
        <div className="container">
        <h1 className="heading_dashboard fw-bold my-4 text-center">
          Dashboard
        </h1>
        <div className="rounded-2">
          <table className="table table-hover table-responsive table-light rounded-2">
            <thead>
              <tr>
                <th scope="col">Id.</th>
                <th scope="col" style={{textAlign:"center"}}>File Name</th>
                <th scope="col" style={{textAlign:"center"}}>Upload Date</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {Data.map((data) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td style={{textAlign:"center"}}>{data.title}</td>
                    <td className="small text-muted" style={{textAlign:"center"}}>{data.date}</td>
                    <td style={{textAlign:"right"}}>
                      <a rel="noreferrer" target="_blank" href={data.url}><button type="button" className="btn btn-sm btn-primary justify-content-right">View</button></a>
                      <a href={data.url +"?filename=filename.png&download=true"}><button type="button" className="btn mx-lg-4 btn-success btn-sm">Download</button></a>
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
