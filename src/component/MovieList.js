import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = useSelector((state) => state.addReducers.moviesData);
  return (
    <div>
        <button>Add movie</button>
      
        {movies.map((el) => (
          <MovieCard movie={el} key={el.id} />
        ))}
      
    </div>
  );
};

export default MovieList;
