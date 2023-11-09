import React, { useState, useEffect } from "react";
import TicketList from "./TicketList";
import { useNavigate } from "react-router";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleEventClick = (event) => {
    navigate(`/tickets`);
  };

  return (
    <div>
      <h2>Upcoming Events</h2>
      <p>Buy tickets in advance to popular events</p>
      {events.map((event) => (
        <div
          className="EventCard"
          key={event.id}
          onClick={() => handleEventClick(event)}
        >
          <h3>{event.name}</h3>
          <img className="image" src={event.image_url} alt={event.name} />
        </div>
      ))}
      {selectedEvent && (
        <TicketList
          selectedEvent={selectedEvent}
          clearSelectedEvent={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default EventList;