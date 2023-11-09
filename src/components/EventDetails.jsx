import React from 'react';
import { Link } from 'react-router-dom';

const EventDetails = ({ event }) => {
  const handleBuyTicket = () => {
  };

  return (
    <div>
      <h2>Event Details</h2>
      <img className='image' src={event.image_url} alt={event.name} />
      <h3>{event.name}</h3>
      <p>Venue: {event.venue}</p>
      <p>Location: {event.location}</p>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Tickets Available: {event.tickets_available}</p>
      <p>Ticket Price: ${event.ticket_price}</p>
      <button className='BuyTicketButton' onClick={handleBuyTicket}>Buy Ticket</button>
      <Link to='/events'>Back to Events</Link>
    </div>
  );
};

export default EventDetails;
