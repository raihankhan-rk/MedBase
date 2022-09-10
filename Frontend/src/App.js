import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "./App.css"
import Auth from "./components/Auth"
import Dashboard from "./components/Dashboard"
import Otp from "./components/Otp"


function App() {
  return (
    <>
    <React.StrictMode>
      <BrowserRouter>
          <Switch>
            <Route exact path="/auth"><Auth/></Route>
            <Route exact path="/otp"><Otp/></Route>
            <Route exact path="/dashboard"><Dashboard/></Route>
            <Route exact path="/"><Auth/></Route>
          </Switch>
        </BrowserRouter>
    </React.StrictMode>
    </>
  );
}

export default App;
