import { useState, useEffect } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  const handleBuyTicket = (event) => {
    const availableTickets = event.tickets_available;

    if (availableTickets > 0) {
      alert('You have bought a ticket for ' + event.name);
    
      fetch(`http://localhost:3000/events/${event.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({tickets_available: availableTickets - 1,}),
      });
    } else {
      alert('Tickets are sold out for this event!');
      return; 
    }
  };

  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.map((event) => (
        <div className='EventCard' key={event.id}>
          <h3>{event.name}</h3>
          <p className='description'>{event.description}</p>
          <img className='image' src={event.image_url} alt={event.name} />
          <br />
          <button  className='BtnBuy'onClick={() => handleBuyTicket(event)}>Buy Ticket</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;