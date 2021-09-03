import { Link } from "react-router-dom";
import  styles  from "../Lista.module.css";

 export function Lista ({movie}){

    return(
        
        <li className = {styles.li}>
            <Link to = {`/pelis/${movie.imdbID}`}>
            <img src = {movie.Poster}></img>
            </Link>
           
            <h3>{movie.Title}</h3>
        </li>
    )
} 