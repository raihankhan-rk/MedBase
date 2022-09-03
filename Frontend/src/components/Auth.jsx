import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Auth(props) {
    let [authMode, setAuthMode] = useState("signin")
    const [name, setName] = useState('')
    const [aadhar, setAadhar] = useState('')
    const [phone, setPhone] = useState('')

    async function registerUser(){
        const response = await fetch('http://localhost:1337/api/register', {
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                name,
                aadhar,
                phone,
            }),
        })

        const data = await response.json()
        console.log(data);
    }

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form shadow-lg p-3 mb-5 bg-white rounded">
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
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form shadow-lg p-3 mb-5 bg-white rounded" onSubmit={registerUser}>
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
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            type="text"
                            className="form-control mt-1"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Aadhar Number</label>
                        <input
                            value={aadhar}
                            onChange={(e)=>setAadhar(e.target.value)}
                            type="text"
                            className="form-control mt-1"
                            placeholder="XXXX-XXXX-XXXX"
                        />
                    </div>
                    <div className="form-group mt-3">
                            <label>Phone Number</label>
                            <input
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                                type="number"
                                className="form-control mt-1"
                                placeholder="Enter phone number"
                            />
                        </div>
                    <div className="d-grid gap-2 mt-3">
                        <Link to="/auth">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}