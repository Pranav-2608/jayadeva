import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css'; // Import the custom CSS file

const localizer = momentLocalizer(moment);

const MyCalendar = ({ appointments, handleBookAppointment }) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleBookAppointment}
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
      />
    </section>
  );
};

export default MyCalendar;
