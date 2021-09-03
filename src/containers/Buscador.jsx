import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Buscador() {
  const [busqueda, setBusqueda] = useState("");
  const history = useHistory()

  const handleChange = (e) => {
    const buscado = e.target.value;
    setBusqueda(buscado);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setBusqueda("")
    history.push(`/?search=${busqueda}`)
  }

  return (
    <div className="container">
      <form onSubmit = {handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          autoFocus
          onChange={handleChange}
          value={busqueda}
        />
      </form>
    </div>
  );
}
