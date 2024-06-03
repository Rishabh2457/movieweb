import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  const handleAddToFavorites = () => {
    const existingFavorites = localStorage.getItem("favoriteMovies");
    let favoriteMovies = [];
  
    // If there are existing favorites, parse them from string to array
    if (existingFavorites) {
      favoriteMovies = JSON.parse(existingFavorites);
    }
  
    // Push the new movie string into the array
    favoriteMovies.push(JSON.stringify(movie));
  
    // Stringify the updated array and set it back into local storage
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  
  };

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
          <Link to ='/' onClick={handleAddToFavorites} className="back-btn">
            Add to Fav
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
