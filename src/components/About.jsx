import React from "react";
import AboutBackground from "../assets/AboutBackground.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
        <img src={AboutBackground} alt="" />
        <img src={AboutBackground} alt="" />
        <img src={AboutBackground} alt="" />

      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">
          <h1>Safari Ticketing</h1>
          </p>
        <h2 className="primary-heading">
         Experience the shereheee like never before!!!
        </h2>
        <p className="primary-text">
        Safari Ticketing App streamlines the event booking process, providing users with a user-friendly interface and seamless booking experience. 
        Integrated ticket booking application that addresses issues like fragmented user experience, limited accessibility, scalability, data security, outdated technology, lack of personalization and comprehensive event listings, ultimately enhancing the ticket booking experience for users and improving operations for event organizers and service providers.

        </p>
        <p className="primary-text">
          <h1>Key features</h1>
         <h3>Event Search and Discovery: </h3> 
         - Users can easily search for events based on their interests, location, and date.
         <h3>Event Details:</h3>
        - Event pages provide comprehensive information about the event, including descriptions, host, and venue details etc. Users can buy tickets for events directly from the event pages.
         <h3>Event Creation and Management:</h3> 
        - Organizers can create and manage events, including adding descriptions, setting schedules, and managing registrations.
         <h3>Interactive Event Listings: </h3> 
        - Event listings are no longer static lists; they come alive with interactive elements like hover details, event previews, and direct links to event pages.

        </p>
        </div>
      </div>
  );
};

export default About;