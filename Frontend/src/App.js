import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "./App.css"
import Auth from "./components/Auth"
import Dashboard from "./components/Dashboard"
import NavBar from "./components/MedNav"
import Otp from "./components/Otp"

function App() {
  return (
    <>
    <React.StrictMode>
      <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path="/auth"><Auth/></Route>
            <Route path="/otp"><Otp/></Route>
            <Route path="/dashboard"><Dashboard/></Route>
            <Route exact path="/"><Auth/></Route>
          </Switch>
        </BrowserRouter>
    </React.StrictMode>
    </>
  );
}

export default App;
