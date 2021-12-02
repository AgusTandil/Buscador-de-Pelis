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
  const [movies, setMovies] = useState([ {
    "Title": "Nomadland",
    "Year": "2020",
    "imdbID": "tt9770150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDRiZWUxNmItNDU5Yy00ODNmLTk0M2ItZjQzZTA5OTJkZjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    
    {
    "Title": "Shershaah",
    "Year": "2021",
    "imdbID": "tt10295212",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
    "Title": "Snake Eyes: G.I. Joe Origins",
    "Year": "2021",
    "imdbID": "tt8404256",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGJmMWUwMDgtYjEyNS00YmZhLTk3ZGEtZDliZDBhMDJkMGUyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
    },
    {
    "Title": "Don't Breathe 2",
    "Year": "2021",
    "imdbID": "tt6246322",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWRmNzQ0N2QtZmJlYS00MWQ4LTlhY2ItODNmY2JkNGYyZTRlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"
    },
    {
    "Title": "Free Guy",
    "Year": "2021",
    "imdbID": "tt6264654",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
    },
    {
    "Title": "Raya and the Last Dragon",
    "Year": "2021",
    "imdbID": "tt5109280",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    {
    "Title": "The Suicide Squad",
    "Year": "2021",
    "imdbID": "tt6334354",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_SX300.jpg"
    },
    {
    "Title": "The Green Knight",
    "Year": "2021",
    "imdbID": "tt9243804",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNTdiNWMtOWY0My00MjM4LTkwNzMtOGI0YThhN2Q4M2I4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    {
    "Title": "Sweet Girl",
    "Year": "2021",
    "imdbID": "tt10731768",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGIzOTZiZjItNTMyYS00ODcyLWE2ZDUtYWNjZDNmNTUxYjVkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
    },
    {
    "Title": "Stillwater",
    "Year": "2021",
    "imdbID": "tt10696896",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2IzMTUyMDUtZGJmZC00YWMzLWFhMGMtZjQwMTkzMzViMjFkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
    },
    {
    "Title": "Cruella",
    "Year": "2021",
    "imdbID": "tt3228774",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
    },
    {
    "Title": "Respect",
    "Year": "2021",
    "imdbID": "tt2452150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxODE4MWQtMTZlMi00N2UwLWEzNGEtOGVkZWVmMzgwYTg5XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg"
    },
    {
    "Title": "Luca",
    "Year": "2021",
    "imdbID": "tt12801262",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg"
    }, {
      "Title": "Nobody",
      "Year": "2021",
      "imdbID": "tt7888964",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"
      },
      {
      "Title": "The Shawshank Redemption",
      "Year": "1994",
      "imdbID": "tt0111161",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
      }]);
  const query = useQuery()
  const search = query.get("search")


 /*  useEffect(() => {
    Axios.get("http://www.omdbapi.com/?apikey=5a4bcf11&s=Batman").then((res) =>
      setMovies(res.data.Search)
    );
  }, []); */

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


      
