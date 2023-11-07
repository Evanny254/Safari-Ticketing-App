import React, { useState, useEffect } from "react";

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
    setSelectedTicket(null); // Clear the selected ticket when searching
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

  const filteredTickets = tickets.filter((ticket) =>
    ticket.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Available Tickets</h2>
      <input
        type="text"
        placeholder="Search for a ticket by event name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredTickets.length > 0 ? (
        filteredTickets.map((ticket) => (
          <div key={ticket.id}>
            <h3>{ticket.name}</h3>
            <p>{ticket.description}</p>
            <img src={ticket.image_url} alt={ticket.name} />
            <p>Venue: {ticket.venue}</p>
            <p>Location: {ticket.location}</p>
            <p>Date: {ticket.date}</p>
            <p>Time: {ticket.time}</p>
            <p>Tickets Available: {ticket.tickets_available}</p>
            <p>Ticket Price: ${ticket.ticket_price}</p>
            <button className="BtnBuy" onClick={() => handleBuyTicket(ticket)}>
              Buy Ticket
            </button>
          </div>
        ))
      ) : (
        selectedTicket ? (
          <div>
            <h3>{selectedTicket.name}</h3>
            <p>{selectedTicket.description}</p>
            <img src={selectedTicket.image_url} alt={selectedTicket.name} />
            <p>Venue: {selectedTicket.venue}</p>
            <p>Location: {selectedTicket.location}</p>
            <p>Date: {selectedTicket.date}</p>
            <p>Time: {selectedTicket.time}</p>
            <p>Tickets Available: {selectedTicket.tickets_available}</p>
            <p>Ticket Price: ${selectedTicket.ticket_price}</p>
            <button className="BtnBuy" onClick={() => handleBuyTicket(selectedTicket)}>
              Buy Ticket
            </button>
          </div>
        ) : (
          <p>No tickets found.</p>
        )
      )}
    </div>
  );
};

export default TicketList;
