import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css'; // Import the custom CSS file

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [appointments, setAppointments] = useState([
    // Example appointments
    { id: 1, start: new Date(), end: new Date(), title: "Booked Appointment", booked: true, agenda: "Example agenda" }
  ]);

  const handleBookAppointment = (slotInfo) => {
    const title = prompt("Enter the name for the new appointment:");
    const agenda = prompt("Enter the main agenda for the appointment:");
    if (title && agenda) {
      const newAppointment = {
        id: appointments.length + 1,
        start: slotInfo.start,
        end: slotInfo.end,
        title,
        agenda,
        booked: true
      };
      setAppointments([...appointments, newAppointment]);
    } else {
      alert("Appointment title and agenda cannot be empty.");
    }
  };

  const handleCancelAppointment = (event) => {
    const confirmation = window.confirm(`Cancel appointment: ${event.title}?`);
    if (confirmation) {
      const updatedAppointments = appointments.filter(
        appointment => appointment.id !== event.id
      );
      setAppointments(updatedAppointments);
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
      <Calendar
        localizer={localizer}
        events={appointments}
        views={['month', 'week', 'day']}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleBookAppointment}
        onSelectEvent={handleCancelAppointment}
        eventPropGetter={(event, start, end, isSelected) => {
          const style = {
            backgroundColor: event.booked ? '#1976d2' : '#388e3c', // Blue for booked slots, Green for available slots
            borderRadius: '5px',
            opacity: 0.8,
            color: 'white',
            border: '1px solid #1565c0',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
          };
          return { style };
        }}
        components={{
          event: ({ event }) => (
            <div>
              <span>{event.title}</span>
              <span>{event.agenda}</span>
              <button onClick={() => handleCancelAppointment(event)}>Cancel</button>
            </div>
          )
        }}
      />
    </section>
  );
};

export default MyCalendar;