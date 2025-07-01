// src/pages/CalendarPage.tsx
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { getCalendarEvents } from '../utils/formatEvents';
import './CalendarPage.css';

function CalendarPage() {
  const events = getCalendarEvents();

  return (
    <div className="calendar-container">
      <div className="divider-top">
        {/* <img className="img-topo" src="images/83cf3400.png" alt="" /> */}
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
      </div>
      <h1 style={{ borderBottom: 'none' }}>Calendário</h1>
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>"One day at a time!"</p>
      <hr style={{ border: 'none', borderBottom: '1px solid #BEE1FF', margin: '15px 0' }}/>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale="pt-br"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: ''
        }}
        height="auto"
      />
    </div>
  );
}

export default CalendarPage;