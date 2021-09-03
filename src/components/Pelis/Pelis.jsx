import Axios from "axios";
import styles from "../pelis.module.css";
import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom"
import axios from "axios";
import { Lista } from "./Lista";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function Pelis() {
  const [movies, setMovies] = useState([]);
  const query = useQuery()
  const search = query.get("search")


  useEffect(() => {
    Axios.get("http://www.omdbapi.com/?apikey=5a4bcf11&s=Batman").then((res) =>
      setMovies(res.data.Search)
    );
  }, []);

  useEffect(()=>{
    search !==null? (Axios.get(`http://www.omdbapi.com/?apikey=5a4bcf11&s=${search}`)
    .then(res => setMovies(res.data.Search))):console.log("Pelicula no encontrada")
  },[search])

  return (
    <ul className = {styles.pelisGrilla}>
      {movies.map((movie) => (
        <Lista movie={movie} />
      ))}
    </ul>
  );
}

/* class Pelis extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      
        <ul className = {style.pelisGrilla}   onClick = {() => this.props.selectPeli(this.props.imdbID)} >
       {this.props.pelis.map(peli=>(
         <li className = {style.fila}>
           <img src = {peli.Poster}/>
           <h3>{peli.Title}</h3>
          </li>
       ))} 
       </ul >
  
    )
}
} */
