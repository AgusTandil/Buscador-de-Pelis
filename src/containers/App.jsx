import { Main } from "./Main";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SinglePeli } from "../components/Pelis/SinglePeli";
import { Pelis } from "../components/Pelis/Pelis";
import { Buscador } from "./Buscador";
import { Navbar } from "../components/Navbar";
import {Register} from "../components/Register";
import { Login } from "../components/Login";
import {Logout} from "../components/Logout"
import { useEffect } from "react";
import axios from "axios";

export function App() {
  useEffect(()=>{
  axios.get("/api/auth/me")
  .then(res => console.log(res.data))
  },[])

 


  return (
    <Router>
        
      <header>
        <Navbar />
       
        <br></br>
        <Route exact path ="/">
        <Buscador />
        </Route>
       
      </header>
      <Switch>
        <Route exact path ="/register">
          <Register/>
        </Route>
        <Route exact path ="/login">
          <Login/>
        </Route>
        <Route exact path ="/pelis"> 
          <Logout/>
        </Route>
        <Route exact path="/pelis/:peliId">
          <SinglePeli />
        </Route>

        <Route exact path="/">
          {" "}
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
