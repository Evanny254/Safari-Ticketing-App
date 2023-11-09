import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer';

const Home = ({ userRole, events }) => {
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
          {userRole === 'admin' && (
            <>
              <Link to="/create-event" className="create-event-button">
                Create Event
              </Link>
            </>
          )}
        </div>
        <div className="home-events">
          <h2 className="home-events-header">Upcoming Events</h2>
          {events && events.length > 0 ? (
            <div className="events-list">
              {events.map((event) => (
                <div key={event.id} className="event-card">
                  <h3>{event.name}</h3>
                  <p>{event.description}</p>
                 
                </div>
              ))}
            </div>
          ) : (
            <p></p>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
