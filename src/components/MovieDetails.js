
import React, { useState } from 'react';
import "../assets/CSS/MovieDetails.css"

const MovieDetails = ({ selectedMovie, onBookTicket }) => {
  const [formData, setFormData] = useState({
    movieName: selectedMovie.name,
    // Add other form fields as needed
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookTicket = () => {
    // Perform any booking logic and pass formData to the parent component
    onBookTicket(formData);
  };


  return (
    <div className='movie-details-div'>
    <div className="movie-details-card">
      <h2>Movie Details</h2>
      <div className='movie-img-div'>
      <img src={selectedMovie.image && selectedMovie.image.medium} alt={selectedMovie.name} />
      </div>
      <p>Movie: {selectedMovie.name}</p>
      <p>Language: {selectedMovie.language}</p>
      <p>Genres: {selectedMovie.genres && selectedMovie.genres.join(', ')}</p>
      <p>Type: {selectedMovie.type}</p>
      <p>Run Time: {selectedMovie.runtime}</p>
      <p>Average RunTime: {selectedMovie.averageRuntime}</p>
      {selectedMovie.schedule && (
        <div>
          <p>Schedule:</p>
          <p>Time: {selectedMovie.schedule.time}</p>
          <p>Days: {selectedMovie.schedule.days && selectedMovie.schedule.days.join(', ')}</p>
        </div>
      )}
      <div className='summary' dangerouslySetInnerHTML={{ __html: selectedMovie.summary }} />
      <button onClick={handleBookTicket}>Book Ticket</button>
    </div>
    </div>
  );
};

export default MovieDetails;
