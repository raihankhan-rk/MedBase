import React from 'react'
import Data from '../data.json'

export default function Dashboard() {
    return (
        <>
            <div className="container py-5">
                <h1 className='heading_dashboard fw-bold pb-4 text-center'>Dashboard</h1>
                <div className="main-timeline-5">
                    {
                        Data.map(data => {
                            return (
                                <div className="timeline-5 right-5">
                                    <div className="card border-0 shadow">
                                        <div className="card-body p-4 d-flex flex-row justify-content-between">
                                            <div>
                                                <h2 className="h5 align-center">{data.title}</h2>
                                                <span className="small text-muted"><i className="fa fa-clock-o me-1"></i>{data.date}</span>
                                            </div>
                                            <div>
                                            <a href={data.url +"?filename=filename.png&download=true"}><button type="button" className="btn mx-2 btn-success mt-3 text-end">Download</button></a>
                                            <a href={data.url}><button type="button" className="btn btn-primary mt-3 text-end align-end">View</button></a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
