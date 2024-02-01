
import React, { useState, useEffect } from 'react';
import "../assets/CSS/MovieList.css"

const MoviesList = ({ onSelectMovie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h2>Movies List</h2>
      <ul className='movielist'>
        {movies.map(movie => (
          <li key={movie.show.id}>
            <div className='each-movie'>
              <img src={movie.show.image && movie.show.image.medium} alt={movie.show.name} />
              <h4>{movie.show.name}</h4>
              <button className='movie-button' onClick={() => onSelectMovie(movie.show)}>View Details</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
