import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Home = () => {
 return (
   <div className="home-container">
     <div className="home-content">
       <h1 className="home-title">Discover, Experience, Enjoy!</h1>
       <p className="home-description">
         Your one-stop destination for unforgettable events and experiences.
       </p>
       <div className="home-buttons">
         <Link to="/events" className="explore-button">
           Explore Events
         </Link>
         <Link to="/tickets" className="book-button">
           Book Tickets
         </Link>
       </div>
     </div>
   </div>
 );
};

export default Home;
