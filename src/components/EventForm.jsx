import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventForm = () => {
  const initialFormData = {
    name: "",
    description: "",
    date: null,
    time: "",
    venue: "",
    location: "",
    host: "",
    image_url: "",
    tickets_available: 0,
    ticket_price: 0,
    contact_email: "",
    contact_phone: "",
    tags: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "date" ? new Date(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      name: formData.name,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      venue: formData.venue,
      location: formData.location,
      host: formData.host,
      image_url: formData.image_url,
      tickets_available: formData.tickets_available,
      ticket_price: formData.ticket_price,
      contact_email: formData.contact_email,
      contact_phone: formData.contact_phone,
      tags: formData.tags,
    };

    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("Event created successfully.");
          setFormData({ ...initialFormData }); 
        } else {
          console.error("Event creation failed.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="FormBigBox">
      <div className="FormBox">
      <h2 className="FormHeader">Create an Event</h2>
      <form className="Form" onSubmit={handleSubmit}>
        <div className="ClientName">
      <div className="FormFN">
      <label>Event Name:</label>
      <input
        type="text"
        name="eventName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </div>
      </div>
      <br/>
        <div>
         <label>Description:</label>
         <textarea
           type="text"
           name="description"
           value={formData.description}
           onChange={handleChange}
           required
         />
       </div>
       <br />
       <div>
         <label>Date:</label>
         <DatePicker
           selected={formData.date}
           onChange={(selectedDate) =>
             handleChange({ target: { name: "date", value: selectedDate } })
           }
           required
         />
       </div>
       <br />
       <div>
         <label>Time:</label>
         <input
           type="time"
           name="time"
           value={formData.time}
           onChange={handleChange}
           required
         />
         <div/>
         <br />
         <div>
           <label>Venue:</label>
           <input
             type="text"
             name="venue"
             value={formData.venue}
             onChange={handleChange}
             required
           />
         </div>
         <br />
         <div>
           <label>Location:</label>
           <input
             type="text"
             name="location"
             value={formData.location}
             onChange={handleChange}
             required
           />
         </div>
         <br />
         <div>
           <label>Image_url:</label>
           <input
             type="text"
             name="image_url"
             value={formData.image_url}
             onChange={handleChange}
             required
           />
         </div>
         <br />
         <div>
           <label>Host:</label>
           <input
             type="text"
             name="host"
             value={formData.host}
             onChange={handleChange}
             required
           />
         </div>
         <br />
         <div>
           <label>Tickets Available:</label>
           <input
             type="number"
             name="tickets_available"
             value={formData.tickets_available}
             onChange={handleChange}
             required
           />
         </div>
         <br />
         <div>
           <label>Ticket Price:</label>
           <input
             type="number"
             name="ticket_price"
             value={formData.ticket_price}
             onChange={handleChange}
             required
           />
         </div>
         <br />
         <div>
           <label>Contact Email:</label>
           <input
             type="email"
             name="contact_email"
             value={formData.contact_email}
             onChange={handleChange}
             placeholder="example@example.com"
             required
           />
         </div>
         <br />
         <div>
           <label>Phone:</label>
           <input
             type="number"
             name="contact_phone"
             value={formData.contact_phone}
             onChange={handleChange}
             required
           />
         </div>
         <br />
         <div>
           <label>Tags:</label>
           <input
             name="tags"
             value={formData.tags}
             onChange={handleChange}
             required
           />
         </div>
         <br />
       </div>
       <button
       className="CreateEventBtn"
         type="submit"
         onClick={() => alert(" Event Submitted Successfully")}
       >
         Create Event
       </button>

      </form>
    </div>
    </div>
  );
};

export default EventForm;