// Import the React library, which allows us to define components
import React from "react";
import Players from "./features/players/Players";



// Import the Players component, which we'll use to show a list of players



// Define the App component
function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <>
   <Players/>
    </>
    
  );
}

// Export the App component as the default export
export default App();
