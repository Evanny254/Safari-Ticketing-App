import { useState, useEffect } from 'react';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error('Error fetching tickets:', error));
  }, []);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    if (value) {
      const filteredTickets = tickets.filter((ticket) => ticket.name.toLowerCase().includes(value.toLowerCase()));
      setFilteredTickets(filteredTickets);
    } else {
      setFilteredTickets(tickets);
    }
  };

  return (
    <div>
      <h2>Available Tickets</h2>
      <input
        type="text"
        placeholder="Filter by event name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredTickets.length > 0 ? (
        filteredTickets.map((ticket) => (
          <div key={ticket.id}>
            <h3>{ticket.name}</h3>
            <p>{ticket.description}</p>
            <img src={ticket.image_url} alt={ticket.name} />
            <p>Tickets Available: {ticket.tickets_available}</p>
            <p>Ticket Price: ${ticket.ticket_price}</p>
          </div>
        ))
      ) : (
        <p>No tickets found.</p>
      )}
    </div>
  );
};

export default TicketList;