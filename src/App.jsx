import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EventList from './components/EventList';
import TicketList from './components/TicketList';
import EventForm from './components/EventForm';
import Home from './components/Home';
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;