import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

//3f42312f

const API_URL = "http://www.omdbapi.com/?apikey=3f42312f";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovie("spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovie(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="conatiner">
          {movies.map((movie,index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found!</h2>
        </div>
      )}
    </div>
  );
}

export default App;
