import React from "react";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Axios from "axios";


export function SinglePeli(){
  const {peliId} = useParams()
  const[peli,setPeli] = useState({})

  useEffect(() => {
Axios.get(`https://www.omdbapi.com/?i=${peliId}&apikey=5a4bcf11`)
.then(res=> setPeli(res.data))
  },[peliId])
  console.log(peli)
  return (
  <div>
    <div>
    <img src={peli.Poster}></img>
    </div>
    <h3 className ="letraTitulo">Titulo : {peli.Title}</h3>
    <p> <strong>Sinopsis :</strong>  {peli.Plot}</p>
    <div></div>
   
  </div>
        
  );
  }
