import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EventList from './components/EventList';
import TicketList from './components/TicketList';
import EventForm from './components/EventForm';
import Home from './components/Home';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch('db.json')
      .then((response) => response.json())
      .then((data) => setMessages(data.messages))
      .catch((error) => console.error('Error fetching messages:', error));
  }, []);

  const handleSendMessage = () => {
    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    fetch('db.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: updatedMessages }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Message sent successfully');
          setInputValue(''); // Clear input after sending message
        } else {
          console.error('Failed to send message');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Safari Ticketing App</h1>

      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/tickets" element={<TicketList />} />
            <Route path="/create-event" element={<EventForm />} />
          </Routes>
        </div>
      </Router>

      <div>
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default App;
