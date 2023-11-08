import React, { useState, useEffect } from "react";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      <h2>Upcoming Events</h2>
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
