import { useState, useEffect } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  

  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.map((event) => (
        <div className='EventCard' key={event.id}>
          <h3>{event.name}</h3>
          
          <img className='image' src={event.image_url} alt={event.name} />
          
        </div>
      ))}
    </div>
  );
};

export default EventList;