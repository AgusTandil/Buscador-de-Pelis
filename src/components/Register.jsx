import React from "react";
import styles from "../utils/register.css"
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export function Register() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const history = useHistory()

 const handleSubmit = (e)=>{
  e.preventDefault()
  Axios.post("api/auth/register", {name,email,password} )
    .then(res => console.log(res.data))
    /* success(`new user registered`); */
    history.push("/login");
    
  }
 

  
  return (
    <div>
      <p className="texto">Registro</p>
      <div className="Registro">
        <form
        onSubmit = {handleSubmit}
          method="post"
          action="https://getform.org/f/70415a77-d632-4883-bf07-2e15d3f557da"
        >

        <span className="fontawesome-user"></span>
        <input
          type="text"
          required
          placeholder="Nombre de usuario"
          autocomplete="off"
          onChange = {(e)=>{setName(e.target.value)}}
        ></input>
        <span className="fontawesome-envelope-alt"></span>
        <input
          type="text"
          id="email"
          required
          placeholder="Correo"
          autocomplete="off"
          onChange = {(e)=>{setEmail(e.target.value)}}
        ></input>
        <span className="fontawesome-lock"></span>
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Contraseña"
          autocomplete="off"
          onChange = {(e)=>{setPassword(e.target.value)}}
        ></input>
        <input
          type="submit"
          value="Registrar"
          title="Registra tu cuenta"
        ></input>
        <a href ="/login"></a>
        </form>
      </div>
    </div>
  );
}


