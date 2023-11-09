import { useState, useEffect } from "react";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data);
      })
      .catch((error) => console.error("Error fetching tickets:", error));
  }, []);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    setSelectedTicket(null);
  };

  const handleBuyTicket = (event) => {
    const availableTickets = event.tickets_available;

    if (availableTickets > 0) {
      const updatedTickets = [...tickets];
      const ticketIndex = updatedTickets.findIndex((ticket) => ticket.id === event.id);

      if (ticketIndex !== -1) {
        updatedTickets[ticketIndex] = {
          ...event,
          tickets_available: availableTickets - 1,
        };
        setTickets(updatedTickets);
      }

      alert("You have bought a ticket for " + event.name);

      fetch(`http://localhost:3000/events/${event.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tickets_available: availableTickets - 1 }),
      });
    } else {
      alert("Tickets are sold out for this event!");
    }
  };

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
  };
  const formatDate = (dateString) => {
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  const filteredTickets = tickets.filter((ticket) =>
    ticket.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Available Tickets</h2>
      <input
        className='FilterPage'
        type="text"
        placeholder="Search by event name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <br />
      {selectedTicket ? (
        <div>
          <h3>{selectedTicket.name}</h3>
          <img className="TicketImage"src={selectedTicket.image_url} alt={selectedTicket.name} />
          <p>Venue: {selectedTicket.venue}</p>
          <p>Location: {selectedTicket.location}</p>
          <p>Date: {selectedTicket.date}</p>
          <p>Time: {selectedTicket.time}</p>
          <p>Tickets Available: {selectedTicket.tickets_available}</p>
          <p>Ticket Price: ${selectedTicket.ticket_price}</p>
          <p>Description: ${selectedTicket.description}</p>
          <button className="BtnBuy" onClick={() => handleBuyTicket(selectedTicket)}>
            Buy Ticket
          </button>
          <button className="GoBackBtn"onClick={() => setSelectedTicket(null)}>Go Back</button>
        </div>
      ) : (
        <div>
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <div
                className="TicketCard"
                key={ticket.id}
                onClick={() => handleTicketClick(ticket)}
              >
                <img className="TicketImage" src={ticket.image_url} alt={ticket.name} />
                <p>{formatDate(ticket.date)}</p>
                <h3>{ticket.name}</h3>
               

                
              </div>
            ))
          ) : (
            <p>No tickets found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TicketList;
