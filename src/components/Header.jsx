import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
 return (
   <header className='Headers'>
     <nav>
      
            <Link to="/" className='HomeRoute'><img width="50" height="50" src="https://img.icons8.com/50/000000/home.png" alt="home"/></Link>
          
            <Link to="/events" className='EventsRoute'>Events</Link>
         
            <Link to="/tickets" className='TicketsRoute'>Tickets</Link>
         
            <Link to="/create-event" className='Create-EventRoute'>Create Event</Link>
         
      </nav>
    </header>
  )

};


export default Header;