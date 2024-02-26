// Import the React libraimport React from "react";

// Import the generated hook from our RTK Query API slice
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import { useState } from "react";

// Import the CSS styles for this component
import '../../index.css'

// Define a new React component
export default Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = useFetchPlayersQuery();


  // Show a loading message while data is being fetched
  if (isLoading) {isLoading && <p>Loading data. . .</p>
    
  };

  // Show an error message if the fetch failed
  if (error) { error && <p> Sorry, could not retrieve data</p>
    
  };

  // Show the fetched data after it has arrived
  return (
    <div className="players">
      

      {/* Map through the data array and generate a div for each player */}
      {data?.data?.players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          {/* Display the player's image, with the player's name as alt text */}
          
          <div className="player-details">
            
            <h2>  {player.name} </h2> 
            
            <p>  {player.breed} </p> 
            
            <p> {player.status} </p>
          </div>
        </div>
      ))}
    </div>
  );
;
}
