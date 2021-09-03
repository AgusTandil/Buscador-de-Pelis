import React from "react";
import { useEffect,useState } from "react";
import { Logout } from "./Logout";

export function  Navbar() {

   
  return (
    <nav className="navbar navbar-dark bg-dark border-bottom border-white" >
      <div className="container">
        <a className="navbar-brand" href="/">
          OmdbApp
        </a>
        <a className="navbar-brand" href="/login">Login</a>
        <a className="navbar-brand" href="/" onClick= {Logout}>Logout</a>
        <a className="navbar-brand" href="/register">Register</a>
       
      </div>
    </nav>
  );
};

