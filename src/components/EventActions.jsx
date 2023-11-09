import { useState, useEffect } from 'react';

function EventActions() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  const handleDelete = (eventId) => {
    
    const updatedEvents = events.filter(event => event.id !== eventId);
    setEvents(updatedEvents);

  
    fetch(`http://localhost:3000/events/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => console.log('Event deleted from backend:', data))
      .catch(error => console.error('Error deleting event:', error));
  };

  return (
    <div>
      <h2 className='deleteTitle'>Event Actions</h2>
      {events.map((event) => (
        <div className='EventAction' key={event.id}>
          <p>{event.name}</p>
          <img className='EventImage' src={event.image_url} alt={event.name} />
          <button onClick={() => handleDelete(event.id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
}

export default EventActions;
