import "./App.css";
import Movie from "./Movie";
import MoviesJson from "./movies.json";
import Pages from "./Pages";
import PageWrapper from "./PageWrapper";
import {useState} from 'react';
import {useEffect} from 'react';

function App() {

  const [actualPage, setActualPage] = useState(1)
  // const [allMovies, setAllMovies] = useState([]);
  const moviesForPage = 5;

  let movies = MoviesJson;

  // useEffect(() => {
  // searchMovies();
  // }, []);

  // const searchMovies = async () => {
  //   let url = 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json'
    
    
  //   let response = await fetch(url, {
  //     "method": 'GET',
  //     "mode": 'no-cors',
  //     "headers": {
  //       "Accept": 'application/json',
  //       "Content-type": 'application/json'
  //     }
  //   });
  //   let json = await response.json();
  //   alert(json)
  // setAllMovies(json)
  // }






  const uploadMovies = () => {
    movies = movies.slice((actualPage - 1) * moviesForPage, actualPage * moviesForPage);
  }

  const getTotalPages = () => {
    let quantityTotalMovies = MoviesJson.length;
    return Math.ceil(quantityTotalMovies / moviesForPage)
  }

  uploadMovies();

  return (
    <PageWrapper>

      {/* <button onClick={searchMovies()}></button> */}

      {movies.map(movie =>
      <Movie
      img={movie.img}
      title={movie.title}
      stars={movie.stars}
      director={movie.director}
      actors={movie.actors}
      date={movie.date}
      runTime={movie.runTime}
      >{movie.description}
      </Movie>
    )}

    <Pages page={actualPage} total={moviesForPage} onChange={page=> setActualPage(page)}/>

    </PageWrapper>
  );
}

export default App;
