
import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import "./App.css"

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBookTicket = (formData) => {
    // Perform any booking logic and store user details in local storage
    setUserDetails(formData);
    // You may want to navigate to a success screen or do other actions here
  };

  return (
    <div className="container">
      <h1 className='main-heading'>Movie Booking App</h1>
      {!selectedMovie ? (
        <MoviesList onSelectMovie={handleSelectMovie} />
      ) : (
        <MovieDetails selectedMovie={selectedMovie} onBookTicket={handleBookTicket} />
      )}
    </div>
  );
};

export default App;
