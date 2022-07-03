import React from "react";
import { useSelector } from "react-redux";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = useSelector((state) => state.moviesData);
  return (
    <div>
      <AddMovie />
      <div className="movielist">
        {movies.map((el) => (
          <MovieCard movie={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
