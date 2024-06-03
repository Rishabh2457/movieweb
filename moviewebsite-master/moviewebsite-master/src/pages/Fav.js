import React from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

const FavoritesPage = () => {
  // Retrieve the favorite movies array from local storage
  const favoriteMoviesString = localStorage.getItem("favoriteMovies");

  // Parse the array from a string into a JavaScript object
  const favoriteMovies = favoriteMoviesString ? JSON.parse(favoriteMoviesString) : [];

  return (
    <StyledFavoritesPage>
      <StyledTitle>Favorites-Page</StyledTitle>
      {favoriteMovies.map((movieString, index) => {
        const movie = JSON.parse(movieString);
        return (
          <StyledMovieCard key={index}>
            <StyledMovieImage src={movie.Poster} alt="" />
            <StyledMovieContent>
              <StyledMovieTitle>{movie.Title}</StyledMovieTitle>
            </StyledMovieContent>
            <StyledBackBtn to="/" className="back-btn">
            {movie.imdbRating}
            </StyledBackBtn>
          </StyledMovieCard>
        );
      })}
      <StyledBackBt to="/" >
        Go Back
      </StyledBackBt>
    </StyledFavoritesPage>
  );
};

const StyledFavoritesPage = styled.section`
  background-color: white;
`;

const StyledTitle = styled.h1`
  color: green; /* Added color for the h1 tag */
  text-align: center; /* Added text-align for centering */
  font-size: 3rem; /* Increased font size to 2.5rem */
  margin-bottom: 20px; /* Added margin for spacing */
`;

const StyledMovieCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  height: 80px;
  padding:50px;
  border: 1px solid green;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  margin-left: 5rem;
`;

const StyledMovieImage = styled.img`
  width: 80px;
  height: 90px;
  border-radius: 50%;
  margin-right: 10px;
`;

const StyledMovieContent = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMovieTitle = styled.p`
  font-weight: bold;
  margin-right: 10px;
  font-size: 1.5rem
`;

const StyledBackBtn = styled(Link)`
  color: green;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px; /* Added margin-top to position the button below the fav elements */
`;
const StyledBackBt= styled(Link)`
  color: green;
  text-decoration: none;
  font-weight: bold;
  width : 30rem;

  height:9rem;
  margin:auto; /* Added margin-top to position the button below the fav elements */
`;

export default FavoritesPage;
