import { useState } from "react"
import Axios from "axios"
import {useHistory } from "react-router-dom"

export function Login(){
const[email, setEmail] = useState("")
const[password, setPassword] = useState("")
const history = useHistory()

 const handleSubmit = (e) => {
    e.preventDefault()
   
    Axios.post("api/auth/login", {email,password} )
      .then(res => console.log(res.data))//setear aca el estado del login
      history.push("/"); 
  }
      /* Axios.post("/api/auth/logout", "")
      .then(res => console.log(res.data))
      history.push("/login"); */
    
 

return(
    <div>
         <p className="texto">Login</p>
      <div className="Registro">
        <form
         onSubmit = {handleSubmit} 
          method="post"
          action="https://getform.org/f/70415a77-d632-4883-bf07-2e15d3f557da"
        >
        <span className="fontawesome-user"></span>
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
          value="Ingresar"
          title="Registra tu cuenta"
        ></input>
        </form>
        </div>
    </div>
)
 }

