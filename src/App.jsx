import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EventList from './components/EventList';
import TicketList from './components/TicketList';
import EventForm from './components/EventForm';
import Home from './components/Home';
import Chat from './components/Chat';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/Headers" element={<Header />} />
          <Route path="/create-event" element={<EventForm />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;